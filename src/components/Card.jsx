import React from "react";

export default function Card(props) {
  return (
    <div>
      <h2>Hello, {props?.name?.length > 3 ? props?.name : "World"}</h2>
      {props?.name?.length > 3 ? (
        <p>
          {props?.name} is of age {props?.age}
        </p>
      ) : null}
    </div>
  );
}
