// src/components/FloatingButton/FloatingButton.tsx

import React, { useState } from 'react';
import './FloatingButton.css'; // Optional: Create CSS for styling

const FloatingButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      🗨️ {/* You can change this emoji */}
    </button>
  );
};

export default FloatingButton;
