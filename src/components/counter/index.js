import React from "react";

const Counter = ({ handleIncrement, handleReset, handleDecrement, currentValue, id }) => (
  <div>
    <div>
      <h2>{"Counter:  " + currentValue}</h2>
    </div>
    <button onClick={handleIncrement}>Increment.</button>
    <button onClick={handleReset}>Reset.</button>
    <button onClick={handleDecrement}>Decrement.</button>
  </div>
);

export default Counter;
