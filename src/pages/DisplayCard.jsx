import React from "react";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

export default function DisplayCard() {
  const loc = useLocation();
  console.log(loc);

  const name = loc.state.name;
  const age = 32;
  return <>{name.length > 3 && <Card name={name} age={age} />}</>;
}
