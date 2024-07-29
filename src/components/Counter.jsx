import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        style={{
          backgroundColor: "GrayText",
          padding: ".5rem 1.5rem ",
          color: "#fff",
        }}
        onClick={add}
      >
        + 1
      </button>
      <button
        style={{
          backgroundColor: "GrayText",
          padding: ".5rem 1.5rem ",
          color: "#fff",
        }}
        onClick={() => setCount(count - 1)}
      >
        - 1
      </button>
    </div>
  );
}
