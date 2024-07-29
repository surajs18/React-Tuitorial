import React, { useRef } from "react";

export default function Uncontrolled() {
  const name = useRef("");
  const password = useRef("");

  const formHandler = (e) => {
    e.preventDefault();
    console.log({ name: name.current.value, password: password.current.value });
  };
  return (
    <form
      onSubmit={formHandler}
      className="flex flex-col gap-5 w-[10rem] mx-auto"
    >
      <input
        type="name"
        ref={name}
        className="border-2"
        placeholder="name"
        name="name"
      />
      <input
        type="password"
        className="border-2"
        placeholder="password"
        name="password"
        ref={password}
      />

      <button
        className="w-[5rem] h-[2rem] bg-[#7b7979] text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
