import React from "react";
import Card from "../components/Card";

export default function DisplayCard() {
  const name = "Suraj";
  const age = 32;
  return <>{name.length > 3 && <Card name={name} age={age} />}</>;
}
