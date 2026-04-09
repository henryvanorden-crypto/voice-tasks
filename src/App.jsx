import React from "react";

function App() {
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
        }}>Click to Speak</button>
      <div id="transcript"></div>
    </div>
  );
}

export default App;