


import React, { useState } from "react";
import "./Counter.css"; // import the CSS file

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  let counterColor = "green";
  if (count >= 5 && count <= 9) {
    counterColor = "blue";
  } else if (count === 10) {
    counterColor = "red";
  }

  return (
    <div className="counter-container"> 
      <h1 style={{ color: counterColor }}>{count}</h1>
      <button className="increment-button" onClick={incrementCount}>+</button> 
      <button className="decrement-button" onClick={decrementCount}>-</button> 
    </div>
  );
}

export default Counter;
