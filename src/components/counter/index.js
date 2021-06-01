import React from "react";

const Counter = ({ handleIncrement, handleReset, handleDecrement, currentValue }) => (
  <div>
    <div>
      <h1>{"Counter_ :  " + currentValue}</h1>
    </div>
    <button onClick={handleIncrement}>Increment.</button>
    <button onClick={handleReset}>Reset.</button>
    <button onClick={handleDecrement}>Decrement.</button>
  </div>
);

export default Counter;
