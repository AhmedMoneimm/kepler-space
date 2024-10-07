import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API calls
import './Chatbot.css';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "👋 Hello my friend, I'm Astra, your fellow AI friend. Unfortunately, we're currently undergoing maintenance. We're upgrading right now and will return better and stronger! 🚧💪", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  // Toggle this variable to switch between normal mode and maintenance mode
  const [isInMaintenance, setIsInMaintenance] = useState(false); // true for maintenance mode, false for normal chatbot

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    // Add user's message
    const userMessage: Message = { text: inputValue, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Simulate bot typing with delay
    setIsBotTyping(true);

    if (isInMaintenance) {
      // Maintenance message
      setTimeout(() => {
        const maintenanceMessage = "🔧 We are currently undergoing maintenance. Please try again later. 🙏";
        const botMessage: Message = { text: maintenanceMessage, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setIsBotTyping(false); // Reset typing status
      }, 1000); // Simulate delay
    } else {
      // Normal chatbot mode
      const botResponse = await getBotResponse(inputValue); // Get response from the bot

      // Add bot's response
      const botMessage: Message = { text: botResponse, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsBotTyping(false); // Reset typing status
    }

    setInputValue(''); // Reset input field
  };

  const getBotResponse = async (userInput: string) => {
    try {
      const response = await axios.post(
        'https://web-production-4cb5.up.railway.app/search', // Your API URL
        { query: userInput },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
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
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}-message`}>
                {msg.text}
              </div>
            ))}
            {isBotTyping && (
              <div className="chat-message bot-message typing-indicator">
                ...typing
              </div>
            )}
          </div>
          {!isInMaintenance && (  // Only show input if not in maintenance mode
            <div className="input-container">
              <input
                id="chat-input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a message..."
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          )}
        </div>
      )}
      <button className="floating-button" onClick={toggleChat}>
        🤖 {/* Emoji for the floating button */}
      </button>
      <button
        className="toggle-mode-btn"
        onClick={() => setIsInMaintenance(!isInMaintenance)} // Toggle maintenance mode
      >
        {isInMaintenance ? 'Switch to Chatbot' : 'Switch to Maintenance'}
      </button>
    </div>
  );
};

export default Chatbot;
