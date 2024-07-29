import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Elements() {
  const navigate = useNavigate();
  return (
    <>
      <h1>List of elements</h1>
      <p onClick={() => navigate("/card")}>Card</p>
      <Link to={"/container"}>Container</Link>
    </>
  );
}
