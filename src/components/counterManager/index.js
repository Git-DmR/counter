import React from "react";

const Counter = ({ addCounter, removeCounter, totalCounters = 0 }) => (
  <div>
    <h2>Total counters: {totalCounters}</h2>
    <button onClick={addCounter}>Add counter.</button>
    <button onClick={removeCounter}>Remove Counter.</button>
  </div>
);

export default Counter;
