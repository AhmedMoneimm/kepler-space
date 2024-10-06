import faiss
import numpy as np
from sentence_transformers import SentenceTransformer
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# Initialize Flask app
app = Flask(__name__)
CORS(app, origins=["*"])

# Get the current directory of the script
current_directory = os.path.dirname(__file__)

# Construct the relative path to the FAISS index file
faiss_index_path = os.path.join(current_directory, 'exoplanet_index.faiss')

# Load the FAISS index
index = faiss.read_index(faiss_index_path)

# Load the Sentence Transformer model
model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

# Construct the relative path to the Exoplanet.txt file
exoplanet_file_path = os.path.join(current_directory, 'Exoplanet.txt')

# Open the file using the relative path
with open(exoplanet_file_path, 'r', encoding='utf-8') as file:
    raw_text = file.read()

# Extract the questions and answers from the text
qa_pairs = {}
current_question = None
current_answer = []

for line in raw_text.splitlines():
    if "What is" in line or "How" in line or "Do" in line or "Will" in line:
        if current_question:
            qa_pairs[current_question] = " ".join(current_answer).strip()
        current_question = line.strip()  # New question
        current_answer = []  # Reset answer collection
    else:
        if current_question:
            current_answer.append(line)

# Add the last question-answer pair
if current_question:
    qa_pairs[current_question] = " ".join(current_answer).strip()

# Prepare other document sections for FAISS
documents = [doc.strip() for doc in qa_pairs.values() if doc.strip()]

# Function to limit text to a maximum of n words
def limit_response(text, max_words=200):
    words = text.split()
    if len(words) > max_words:
        return ' '.join(words[:max_words]) + "..."
    return text

# Endpoint for querying the FAISS index or fetching exact match from the file
@app.route('/search', methods=['POST'])
def search():
    query = request.json.get('query', '').strip()
    if not query:
        return jsonify({"error": "No query provided"}), 400
    
    # Check if the query exactly matches a known question
    for question in qa_pairs:
        if query.lower() == question.lower():  # Case-insensitive comparison
            response = qa_pairs[question]
            return jsonify({"results": [limit_response(response)]})
    
    # If no exact match, proceed with FAISS search
    query_embedding = model.encode([query])
    distances, indices = index.search(np.array(query_embedding), k=3)

    # Check if there are any valid indices returned from the FAISS search
    if len(indices) == 0 or len(indices[0]) == 0:
        return jsonify({"results": ["No relevant results found for your query."]})
    
    # Get the top documents if indices are valid
    top_documents = [documents[i] for i in indices[0] if i < len(documents)]

    # Limit the response to 200 words unless the user asked for more
    response = " ".join(top_documents)
    if "more" in query.lower() or "expand" in query.lower():  # Check for user requests for more info
        return jsonify({"results": [response]})
    else:
        return jsonify({"results": [limit_response(response)]})

if __name__ == '__main__':
    app.run(debug=True)
