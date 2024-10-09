import React, { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // Set the volume to a low level (0.1 means 10% volume)
    audio.volume = 0.1; // Adjust the volume to your preference

    // Function to play audio after user interaction
    const playAudio = () => {
      audio.play().catch(error => {
        console.error("Audio playback failed due to browser restrictions:", error);
      });
    };

    // Add event listeners for user interaction (click or key press)
    window.addEventListener('click', playAudio, { once: true });
    window.addEventListener('keydown', playAudio, { once: true });

    return () => {
      // Cleanup event listeners on unmount
      window.removeEventListener('click', playAudio);
      window.removeEventListener('keydown', playAudio);

      // Pause the audio when the component unmounts
      if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
      }
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
