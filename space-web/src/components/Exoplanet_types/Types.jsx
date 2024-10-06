import ReusableDiv from "../ReusableDiv";

const Types = () => {
<<<<<<< HEAD
=======
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
>>>>>>> cd95597aaf916af23e47752474ae531eb9e3c6c9
  return (
    <ReusableDiv
      title="Out-of-This-World: The Coolest Types of Exoplanets!"
      dataPath="/data/Exoplanets_type/Exoplanets_types.json"
      quizPath="/quiztyp "
      previousPath="/exoplanet/overview" // Previous page path
<<<<<<< HEAD
      nextPath="/exoplanet/gas-giants" // Next page path
=======
      nextPath="/exoplanet/gas-giants" 
      onSpeak={speakText} // Pass the speak function to ReusableDiv
      onPause={pauseSpeech} // Pass the pause function to ReusableDiv
      onResume={resumeSpeech} 
>>>>>>> cd95597aaf916af23e47752474ae531eb9e3c6c9
    />
  );
};

export default Types;
