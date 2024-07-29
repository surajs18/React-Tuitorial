import React, { useContext, useState } from "react";
import { UserContext } from "../store/ContextStore";

export function Context1() {
  const [value, setValue] = useState("");

  return (
    <UserContext.Provider value={{ value, setValue }}>
      <div>
        <h5>Context1</h5>
        {/* <input
          type="name"
          placeholder="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        /> */}

        <Context2 />
      </div>
    </UserContext.Provider>
  );
}

export function Context2() {
  return (
    <div>
      <h5>Context2</h5>
      <Context3 />
    </div>
  );
}
export function Context3() {
  const { value, setValue } = useContext(UserContext);

  return (
    <div>
      <h5>Context3</h5>
      <input
        type="name"
        placeholder="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Context4 />
    </div>
  );
}
export function Context4() {
  return (
    <div>
      <h5>Context4</h5>
      <Context5 />
    </div>
  );
}
export function Context5() {
  const data = useContext(UserContext);

  return (
    <div>
      <h5>Context5</h5>
      <p>name: {data.value}</p>
    </div>
  );
}
