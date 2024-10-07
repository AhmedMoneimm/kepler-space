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

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    // Add user's message
    const userMessage: Message = { text: inputValue, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Simulate bot typing with delay
    setIsBotTyping(true);

    // Since the bot is in maintenance, we can skip fetching the response
    setTimeout(() => {
      const maintenanceMessage = "🔧 We are currently undergoing maintenance. Please try again later. 🙏";
      const botMessage: Message = { text: maintenanceMessage, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsBotTyping(false); // Reset typing status
    }, 1000); // Simulate delay

    setInputValue('');
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
        </div>
      )}
      <button className="floating-button" onClick={toggleChat}>
        🤖 {/* Emoji for the floating button */}
      </button>
    </div>
  );
};

export default Chatbot;
