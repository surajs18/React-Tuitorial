import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    console.log({ name, password });
  };

  return (
    <form
      onSubmit={formHandler}
      className="flex flex-col gap-5 w-[10rem] mx-auto"
    >
      <input
        type="name"
        value={name}
        className="border-2"
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        name="name"
      />
      <input
        type="password"
        value={password}
        className="border-2"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        name="password"
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
