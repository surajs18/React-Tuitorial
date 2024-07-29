import React, { useState } from "react";

export default function StateHandler() {
  const [text, setText] = useState("Sample");
  // console.log(text);
  return (
    <div>
      <h2>State: {text}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}
