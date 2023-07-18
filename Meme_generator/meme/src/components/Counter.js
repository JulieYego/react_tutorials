import React from "react";

function Counter({ number }) {
  console.log("Counter rendered");
  return (
    <div className="counter--count">
      <h1>{number}</h1>
    </div>
  );
}

export default Counter;
