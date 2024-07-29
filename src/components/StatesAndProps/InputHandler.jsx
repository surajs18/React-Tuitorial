import React from "react";

export default function InputHandler({
  firstName = "Value not assigned",
  setName = () => {
    console.log("object");
  },
}) {
  return (
    <div>
      <input
        type="name"
        value={firstName}
        onChange={(e) => setName(e.target.value)}
      />
      <p>hi</p>
    </div>
  );
}
