import React, { useState } from "react";
import InputHandler from "./InputHandler";

export default function Container() {
  const [name, setName] = useState("");
  return (
    <div>
      <h3>Name: {name}</h3>
      <InputHandler firstName={name} setName={setName} />
    </div>
  );
}
