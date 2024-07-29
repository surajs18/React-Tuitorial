import React, { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimeout(() => setTimer((prev) => prev + 1), 1000);
  }, [timer]);

  return <div>timer: {timer}</div>;
}
