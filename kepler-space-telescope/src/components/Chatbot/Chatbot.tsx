// src/components/Chatbot/Chatbot.tsx
import React, { useState, useEffect } from 'react';
import './Chatbot.css';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user's message
    const userMessage: Message = { text: inputValue, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Simulate bot typing with delay
    setIsBotTyping(true);
    setTimeout(() => {
      const botMessage: Message = { text: `You said: ${inputValue}`, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsBotTyping(false); // Reset typing status
    }, 1000); // 1 second delay for bot response

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
    // Focus the input when the chat window is opened
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
              onKeyPress={handleKeyPress} // Listen for Enter key
              placeholder="Enter a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
      <button className="floating-button" onClick={toggleChat}>
        💬 {/* Emoji for the floating button */}
      </button>
    </div>
  );
};

export default Chatbot;
