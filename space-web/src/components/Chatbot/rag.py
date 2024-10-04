import faiss
import numpy as np
from sentence_transformers import SentenceTransformer
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# Initialize Flask app
app = Flask(__name__)
CORS(app, origins="http://localhost:5173")


# Get the current directory of the script
current_directory = os.path.dirname(__file__)

# Construct the relative path to the FAISS index file
faiss_index_path = os.path.join(current_directory, 'exoplanet_index.faiss')

# Load the FAISS index
index = faiss.read_index(faiss_index_path)
# Step 2: Load the Sentence Transformer model (you'll still need the model to generate embeddings for queries)
model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

# Construct the relative path to the Exoplanet.txt file
exoplanet_file_path = os.path.join(current_directory, 'Exoplanet.txt')

# Open the file using the relative path
with open(exoplanet_file_path, 'r', encoding='utf-8') as file:
    raw_text = file.read()

# Split the text into sections
split_keywords = [
    "Exoplanet types", "How to find a Planet", "Radial Velocity Method",
    "Transit Method", "Direct Imaging of Exoplanets", "Gravitational Microlensing",
    "Astrometry", "Discovery Facility", "Stars", "Why exploring exoplanets"
]
documents = []
current_section = []
for line in raw_text.splitlines():
    if any(keyword in line for keyword in split_keywords):
        if current_section:
            documents.append(' '.join(current_section))  # Join and save previous section
        current_section = [line]  # Start a new section
    else:
        current_section.append(line)  # Keep adding to the current section

if current_section:
    documents.append(' '.join(current_section))

documents = [doc.strip() for doc in documents if doc.strip()]

# Endpoint for querying the FAISS index
@app.route('/search', methods=['POST'])
def search():
    query = request.json.get('query', '')
    if not query:
        return jsonify({"error": "No query provided"}), 400
    
    # Generate embedding for the query
    query_embedding = model.encode([query])

    # Search the FAISS index for top results
    distances, indices = index.search(np.array(query_embedding), k=3)

    # Get the top documents
    top_documents = [documents[i] for i in indices[0]]

    return jsonify({"results": top_documents})

if __name__ == '__main__':
    app.run(debug=True)
