import React, { useState } from "react";
import useFetch from "./hooks/useFetch"; // Importing custom hook
import useDebounce from "./hooks/useDebounce"; // Importing custom hook

const EventHandlingApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("Press a key or click a button!");

  const debouncedInput = useDebounce(inputValue, 500); // 500ms delay
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  // Click event handler
  const handleClick = () => {
    setMessage(`Button Clicked! The input value is: ${debouncedInput}`);
  };

  // Form event handler (input change)
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Keyboard event handler
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setMessage(`Enter key pressed! Submitted value: ${debouncedInput}`);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>React Custom Hooks Example</h2>

      {/* Form Event Handling */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type something..."
        style={{ padding: "10px", marginRight: "10px" }}
      />

      {/* Click Event Handling */}
      <button onClick={handleClick} style={{ padding: "10px 20px" }}>
        Click Me
      </button>

      <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>

      {/* API Call Display */}
      <h3>API Data:</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>{data.title}</p>}
    </div>
  );
};

export default EventHandlingApp;
