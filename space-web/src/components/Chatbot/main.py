import os
import requests
from flask import Flask, request, jsonify, session
from flask_cors import CORS
from flask_session import Session  # To handle server-side sessions
import re  # For regular expressions
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app, origins=["https://spaceeagles.vercel.app", "http://localhost:5173"])  # Adjust based on your front-end URL

# Configure secret key for session management
app.secret_key = os.getenv("SECRET_KEY", os.urandom(24))  # Set a fixed secret key in production

# Configure server-side session
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

# OpenAI API Configuration
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"


# Function to initialize conversation history
def init_conversation():
    if 'messages' not in session:
        session['messages'] = [
            {
                "role": "system",
                "content": (
                    "You are a space scientist knowledgeable about stars, exoplanets, telescopes, and discovery methods. "
                    "Your job is to explain these topics to children, high school students, and college students in a way "
                    "they can easily understand. Provide clear and concise responses, limited to a maximum of 200 words, that end in complete sentences. "
                    "Keep the tone friendly and engaging, and encourage curiosity when appropriate."
                )
            }
        ]     


# Helper function to trim response meaningfully before 200 words
def trim_response(response_text, max_words=200):
    words = response_text.split()

    # If the response is already within the limit, return as is
    if len(words) <= max_words:
        return response_text

    # Truncate to max_words
    truncated_response = " ".join(words[:max_words])

    # Use regex to find the last sentence boundary within truncated_response
    match = re.search(r'([.!?])(?!.*[.!?])', truncated_response)

    if match:
        # Find the position of the last sentence boundary
        last_boundary = match.end()
        return truncated_response[:last_boundary]
    else:
        # If no sentence boundary is found, return the truncated text as is
        return truncated_response


# Function to query OpenAI API with conversation history
def query_openai(user_input):
    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "Content-Type": "application/json"
    }

    # Initialize conversation if not already done
    init_conversation()

    # Append the latest user message to the conversation history
    session['messages'].append({"role": "user", "content": user_input})

    data = {
        "model": "gpt-3.5-turbo",  # Corrected model name
        "messages": session['messages'],
        "max_tokens": 300,  # Adjusted to allow approximately 200 words
        "temperature": 0.7,  # Adjust for more creative or deterministic responses
    }

    try:
        response = requests.post(OPENAI_API_URL, headers=headers, json=data)
        if response.status_code == 200:
            ai_message = response.json()["choices"][0]["message"]["content"].strip()

            # Trim the response to ensure meaningful truncation before 200 words
            trimmed_message = trim_response(ai_message, max_words=200)

            # Append the trimmed AI's response to the conversation history
            session['messages'].append({"role": "assistant", "content": trimmed_message})
            return trimmed_message
        else:
            print(f"OpenAI API error: {response.text}")
            return "I'm unable to retrieve information right now."
    except requests.exceptions.RequestException as e:
        print(f"Error connecting to OpenAI API: {e}")
        return "I'm having trouble connecting to the AI service. Please try again later."


# Flask endpoint to handle search requests
@app.route('/search', methods=['POST'])
def search():
    query = request.json.get('query', '').strip()
    if not query:
        return jsonify({"error": "No query provided"}), 400

    # Query OpenAI for a response with maintained context
    response = query_openai(query)
    return jsonify({"results": [response]})


if __name__ == '__main__':
    app.run(debug=True)
