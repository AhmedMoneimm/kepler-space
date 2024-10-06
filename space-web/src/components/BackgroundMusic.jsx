// src/components/BackgroundMusic.jsx
import React, { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // Set the volume to a low level (0.1 means 10% volume)
    audio.volume = 0.1; // Adjust the volume to your preference

    // Play the audio when the component mounts
    audio.play();

    return () => {
      // Pause the audio when the component unmounts
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/data/bgmusic/bgmusic.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;
