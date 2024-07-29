import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../store/CounterStore/CounterStoreSlice";

export default function ReduxState() {
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  return (
    <div>
      <button
        className="w-[5rem] h-[2rem] bg-[#7b7979] text-white"
        onClick={() => dispatch(increment())}
      >
        +1
      </button>
      <button
        className="w-[5rem] h-[2rem] bg-[#7b7979] text-white"
        onClick={() => dispatch(decrement())}
      >
        -1
      </button>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        className="w-[5rem] h-[2rem] bg-[#7b7979] text-white"
        onClick={() => dispatch(incrementByAmount(value))}
      >
        + {value}
      </button>
      <button
        className="w-[5rem] h-[2rem] bg-[#7b7979] text-white"
        onClick={() => dispatch(decrementByAmount(value))}
      >
        - {value}
      </button>
    </div>
  );
}
