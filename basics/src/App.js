import React, { useState } from "react";

const EventHandlingApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("Press a key or click a button!");

  // Click event handler
  const handleClick = () => {
    setMessage("Button Clicked! The input value is: " + inputValue);
  };

  // Form event handler (input change)
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Keyboard event handler
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setMessage("Enter key pressed! Submitted value: " + inputValue);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>React Event Handling Example</h2>
      
      {/* Form Event Handling */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
        placeholder="Type something..."
        style={{ padding: "10px", marginRight: "10px" }}
      />

      {/* Click Event Handling */}
      <button onClick={handleClick} style={{ padding: "10px 20px" }}>
        Click Me
      </button>

      <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>
    </div>
  );
};

export default EventHandlingApp;
