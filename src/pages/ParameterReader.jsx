import React from "react";
import { useParams } from "react-router-dom";

export default function ParameterReader() {
  const params = useParams();
  const query = "";
  console.log(params);

  return (
    <div>
      <p>{params.id}</p>
      <p>{query}</p>
    </div>
  );
}
