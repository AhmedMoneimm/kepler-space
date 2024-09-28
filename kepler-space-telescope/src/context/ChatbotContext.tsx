import React, { createContext, useState, useContext } from 'react';

interface ChatbotContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  messages: string[];
  addMessage: (message: string) => void;
}

const ChatbotContext = createContext<ChatbotContextProps | undefined>(undefined);

export const ChatbotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (message: string) => {
    setMessages([...messages, message]);
  };

  return (
    <ChatbotContext.Provider value={{ isOpen, setIsOpen, messages, addMessage }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};
