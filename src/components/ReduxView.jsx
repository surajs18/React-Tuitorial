import React from "react";
import { useSelector } from "react-redux";

export default function ReduxView() {
  const count = useSelector((state) => state.counter.value);
  return <p className="text-lg font-semibold">{count}</p>;
}
