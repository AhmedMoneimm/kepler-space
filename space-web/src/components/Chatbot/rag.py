import faiss
import numpy as np
from sentence_transformers import SentenceTransformer
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
from sklearn.metrics.pairwise import cosine_similarity

# Initialize Flask app
app = Flask(__name__)
CORS(app, origins="*")

# Hugging Face API Configuration for BlenderBot Distill model
HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill"
HUGGINGFACE_API_KEY = "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"  # Replace with your actual Hugging Face API key

# Get the current directory of the script
current_directory = os.path.dirname(__file__)

# Load the FAISS index for document search
faiss_index_path = os.path.join(current_directory, 'exoplanet_index.faiss')
index = faiss.read_index(faiss_index_path)

# Load the Sentence Transformer model for embeddings
model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

# Load the document-based question/answers from a file
exoplanet_file_path = os.path.join(current_directory, 'Exoplanet.txt')
with open(exoplanet_file_path, 'r', encoding='utf-8') as file:
    raw_text = file.read()

# Extract questions and answers from the document
qa_pairs = {}
current_question = None
current_answer = []
for line in raw_text.splitlines():
    if "What is" in line or "How" in line or "Do" in line or "Will" in line:
        if current_question:
            qa_pairs[current_question] = " ".join(current_answer).strip()
        current_question = line.strip()  # New question
        current_answer = []  # Reset the answer collection
    else:
        if current_question:
            current_answer.append(line)

# Add the last question-answer pair
if current_question:
    qa_pairs[current_question] = " ".join(current_answer).strip()

# Prepare the FAISS document list
documents = [doc.strip() for doc in qa_pairs.values() if doc.strip()]
document_embeddings = model.encode(documents)

# Function to limit the text response length to 200 words
def limit_response(text, max_words=200):
    words = text.split()
    if len(words) > max_words:
        return ' '.join(words[:max_words]) + "..."
    return text

# Function to query Hugging Face's BlenderBot for conversation
def query_blenderbot(prompt):
    headers = {"Authorization": f"Bearer {HUGGINGFACE_API_KEY}"}
    data = {"inputs": prompt}
    
    try:
        response = requests.post(HUGGINGFACE_API_URL, headers=headers, json=data)
        if response.status_code == 200 and 'generated_text' in response.json()[0]:
            return response.json()[0]["generated_text"].strip()
        else:
            return "I'm sorry, I can't provide a response right now. Please try again later."
    except requests.exceptions.RequestException as e:
        print(f"Error connecting to Hugging Face: {e}")
        return "I'm having trouble connecting to the chatbot service. Please try again later."

# Function to handle document-based search using FAISS and cosine similarity
def search_documents(query):
    query_embedding = model.encode([query])

    # Use cosine similarity for better relevance ranking
    similarity_scores = cosine_similarity(query_embedding, document_embeddings).flatten()
    top_indices = np.argsort(similarity_scores)[-3:][::-1]  # Get the top 3 most relevant

    top_documents = [documents[i] for i in top_indices if similarity_scores[i] > 0.3]  # Only pick relevant ones

    if not top_documents:
        return "I couldn't find relevant information in the document."

    response = " ".join(top_documents)

    # Limit the response unless the user explicitly asks for more
    if "more" in query.lower() or "expand" in query.lower():
        return response
    return limit_response(response)

# Function to handle general conversation and document-based queries intelligently
def handle_conversation(query):
    # Check for casual conversation topics first
    if any(keyword in query.lower() for keyword in ["hi", "hello", "how are you", "what's up", "hey"]):
        return query_blenderbot(query)

    # If it's not a greeting, search the documents using FAISS with cosine similarity
    return search_documents(query)

# Flask endpoint to handle search requests
@app.route('/search', methods=['POST'])
def search():
    query = request.json.get('query', '').strip()
    if not query:
        return jsonify({"error": "No query provided"}), 400

    # Handle conversation or document search
    response = handle_conversation(query)
    return jsonify({"results": [response]})

if __name__ == '__main__':
    app.run(debug=True)


