import React from "react";

export default function Lists() {
  const data = [
    { name: "Syed", id: 0 },
    { name: "Suraj", id: 1 },
    { name: "Nithin", id: 2 },
    { name: "Nagraj", id: 3 },
  ];

  const list1 = data?.map((ele) => (
    <li key={ele?.id} className="head">
      {ele?.name}
    </li>
  ));

  const list2 = [];
  data?.forEach((ele) => {
    list2.push(<li key={ele?.id}>{ele?.name}</li>);
  });

  return (
    <div>
      <ol>{list1}</ol>
      <br />
      <ul>{list2}</ul>
    </div>
  );
}
