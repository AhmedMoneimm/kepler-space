import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Assuming your CSS is in the same directory

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello my friend, I'm Astra, your fellow AI friend. Want me to help you with something?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;
    setInputValue('');

    const userMessage: Message = { text: inputValue, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setIsBotTyping(true);

    const botResponse = await getBotResponse(inputValue);

    const botMessage: Message = { text: botResponse, sender: 'bot' };
    setMessages((prevMessages) => [...prevMessages, botMessage]);

    setIsBotTyping(false);
  };

  const getBotResponse = async (userInput: string) => {
    try {
      const response = await axios.post(
        'https://123-otb1.vercel.app/search',
        { query: userInput },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data && response.data.results && response.data.results.length > 0) {
        return response.data.results[0];
      } else {
        return "Sorry, I couldn't find any relevant information.";
      }
    } catch (error: any) {
      console.error('Error fetching bot response:', error.message);
      return 'Error connecting to the search service.';
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (isOpen) {
      const inputElement = document.getElementById('chat-input') as HTMLInputElement;
      inputElement?.focus();
    }
  }, [isOpen]);

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Chat with Astra</span>
            <button className="close-btn" onClick={toggleChat}>✖</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}-message`}>
                {msg.text}
              </div>
            ))}
            {isBotTyping && (
              <div className="chat-message bot-message typing-indicator">
                ...Astra is typing
              </div>
            )}
          </div>
          <div className="input-container">
            <input
              id="chat-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress} 
              placeholder="Enter a message..."
            />
            <button className="send-btn" onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
      <button className="floating-button" onClick={toggleChat}>
        <span role="img" aria-label="chat">🤖</span>
      </button>
    </div>
  );
};

export default Chatbot;
