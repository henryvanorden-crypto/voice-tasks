import React, { useState } from "react";

function App() {
const [listening, setListening] = useState(false); // tracks mic state
const [transcript, setTranscript] = useState("");  // stores speech text

const startListening = () => {
  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.start();
  setListening(true); // mic is now listening

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    setTranscript(text); // display text
    setListening(false); // stop listening after result
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error", event.error);
    setListening(false); // stop listening if error
  };

  recognition.onend = () => {
    setListening(false); // safety: ensure listening state resets
  };
};

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",      
      }}>
      <h1>Welcome to Voice2Task</h1>
      <button style={{
          padding: "20px 40px",  
          fontSize: "1.5rem",    
          marginTop: "20px",
          cursor: "pointer",
        }} onClick={startListening}>Click to Speak</button>
      <div style={{ marginTop: "10px" }}>
        {listening ? <p>🎤 Listening...</p> : <p>Make sure to speak clearly</p>}
      </div>

      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        {transcript}
      </div>
    </div>
  );
}

export default App;