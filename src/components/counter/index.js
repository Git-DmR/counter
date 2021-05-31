import React from "react";

const Counter = ({ handleIncrement, handleDecrement, currentValue }) => (
  <div>
    <div>
      <strong>{"Counter_ :  "}</strong>
      {currentValue}
    </div>
    <button onClick={handleIncrement}>Increment.</button>
    <button onClick={handleDecrement}>Decrement.</button>
  </div>
);

export default Counter;
