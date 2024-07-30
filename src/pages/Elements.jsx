import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Elements() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2">
      <h1>List of elements</h1>
      <p onClick={() => navigate("/card", { state: { name: "Suraj" } })}>
        Card
      </p>
      <Link to={"/container"}>Container</Link>
      <Link to={"/context"}>Context</Link>
      <Link to={"/counter"}>Counter</Link>
      <Link to={"/effects"}>Effects</Link>
      <Link to={"/lists"}>List & keys</Link>
      <Link to={"/reducer"}>Reducer</Link>
      <Link to={"/redux"}>Redux</Link>
      <Link to={"/ref"}>Ref</Link>
      <Link to={"/state"}>States</Link>
      <Link to={"/styles"}>Styles</Link>
      <Link to={"/timer"}>Timer</Link>
      <Link to={"/forms"}>Forms</Link>
      <Link to={"/param/5?name=suraj"}>Param - 5</Link>
    </div>
  );
}
