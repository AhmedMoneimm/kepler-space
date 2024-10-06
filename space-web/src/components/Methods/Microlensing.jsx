// src/components/Methods/Microlensing.jsx
import ReusableDiv from "../ReusableDiv";

const Microlensing = () => {
    // Function to handle Text-to-Speech
  const speakText = (text) => {
    const synth = window.speechSynthesis;

    // Function to start speaking once voices are loaded
    const startSpeaking = () => {
      if (synth.speaking) {
        synth.cancel(); // Cancel if already speaking
      }

      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'en-US';
      speech.volume = 1; // Set volume

      const voices = synth.getVoices();
      if (voices.length > 0) {
        speech.voice = voices[0]; // Set first available voice
        console.log("Speaking:", text);
        synth.speak(speech);
      } else {
        console.error("No voices available.");
      }
    };

    // Check if voices are already loaded
    if (synth.getVoices().length > 0) {
      startSpeaking();
    } else {
      // Wait for voices to be loaded
      synth.addEventListener('voiceschanged', startSpeaking);
    }
  };

  // Function to Pause Speech
  const pauseSpeech = () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
    }
  };

  // Function to Resume Speech
  const resumeSpeech = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  };
    return (
        <ReusableDiv
            title="Gravitational Microlensing: Detecting Planets Through Light Bending"
            dataPath="/data/Discovery/Discovery_Microlensing.json"
            quizPath="/quizmic"
            previousPath="/methods/direct-imaging"
            nextPath="/methods/astrometry"
            onSpeak={speakText} // Pass the speak function to ReusableDiv
      onPause={pauseSpeech} // Pass the pause function to ReusableDiv
      onResume={resumeSpeech} 
        />
    );
};

export default Microlensing;
