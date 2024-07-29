import React, { useRef } from "react";

export default function Ref() {
  const inputValue = useRef();

  const printRef = () => {
    console.log(inputValue.current.value);
  };
  return (
    <div>
      {" "}
      <input type="text" ref={inputValue} />
      <button onClick={printRef}>CLG REF</button>
      <br />
      <button onClick={() => inputValue.current.focus()}>Add Focus</button>
    </div>
  );
}
