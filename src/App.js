import React, { useState } from "react";
import "./App.css";

function App() {
  // State variables for the input fields, result, and the operation
  const [input, setInput] = useState("");      // Input field
  const [result, setResult] = useState(null);  // Result after calculation
  const [operation, setOperation] = useState("");  // Operation: +, -, *, /
  const [previousValue, setPreviousValue] = useState(null); // For storing previous result

  // Function to handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Function to handle addition
  const handleAdd = () => {
    setOperation("+");
    setPreviousValue(result !== null ? result : parseFloat(input));
    setInput(""); // Clear input field after selecting operation
  };

  // Function to handle subtraction
  const handleSubtract = () => {
    setOperation("-");
    setPreviousValue(result !== null ? result : parseFloat(input));
    setInput(""); // Clear input field after selecting operation
  };

  // Function to handle multiplication
  const handleMultiply = () => {
    setOperation("*");
    setPreviousValue(result !== null ? result : parseFloat(input));
    setInput(""); // Clear input field after selecting operation
  };

  // Function to handle division
  const handleDivide = () => {
    setOperation("/");
    setPreviousValue(result !== null ? result : parseFloat(input));
    setInput(""); // Clear input field after selecting operation
  };

  // Function to handle the equal button (=)
  const handleEqual = () => {
    if (operation && input !== "") {
      const currentValue = parseFloat(input);
      let calculatedResult;

      switch (operation) {
        case "+":
          calculatedResult = previousValue + currentValue;
          break;
        case "-":
          calculatedResult = previousValue - currentValue;
          break;
        case "*":
          calculatedResult = previousValue * currentValue;
          break;
        case "/":
          if (currentValue === 0) {
            alert("Cannot divide by zero");
            return;
          }
          calculatedResult = previousValue / currentValue;
          break;
        default:
          break;
      }
      setResult(calculatedResult);
      setOperation("");  // Reset operation
      setPreviousValue(calculatedResult); // Store the result for further operations
      setInput("");  // Clear input field after calculation
    }
  };

  // Function to reset input field
  const handleResetInput = () => {
    setInput("");  // Clear input field only
  };

  // Function to reset input and result
  const handleResetAll = () => {
    setInput("");      // Clear input field
    setResult(null);   // Clear result
    setOperation(""); // Reset operation
    setPreviousValue(null); // Reset previous value
  };

  return (
    <div className="App">
      
      <div className="container">
      <h1>Simplest Working Calculator</h1>
        <h2>{result !== null ? result : 0}</h2>
     
      <div>
        <input
          type="number"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter number"
        />
      </div>
      <div>
        <button className="btn" onClick={handleAdd}>+</button>
        <button className="btn" onClick={handleSubtract}>-</button>
        <button className="btn" onClick={handleMultiply}>*</button>
        <button className="btn" onClick={handleDivide}>/</button>
        <button className="btn" onClick={handleEqual}>=</button>
        <button className="btn orange" onClick={handleResetInput}>Reset Input</button>
        <button className="btn orange" onClick={handleResetAll}>Reset All</button>
      </div>
      </div>
      </div>

 
  );
}

export default App;
