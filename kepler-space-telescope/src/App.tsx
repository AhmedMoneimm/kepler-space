// src/App.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Quizzes from './pages/Quizzes/Quizzes'; // Import the Quizzes page
import Navbar from './components/Navbar/Navbar';
import FloatingButton from './components/FloatingButton/FloatingButton';
import Chatbot from './components/Chatbot/Chatbot';

const App: React.FC = () => {
  const [isChatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible((prev) => !prev);
  };

  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quizzes" element={<Quizzes />} /> {/* Add new route */}
        </Routes>
        <FloatingButton onClick={toggleChat} />
        {isChatVisible && <Chatbot />}
      </Layout>
    </Router>
  );
};

export default App;
