import React, { useReducer, useState } from "react";

export default function Reducer() {
  const initialState = [
    { id: 1, title: "Call Syed at 2 PM", complete: false },
    { id: 2, title: "Call Ayesha at 2 PM", complete: false },
  ];
  const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE": {
        return state.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: action.payload.complete };
          } else {
            return todo;
          }
        });
      }

      case "ADD": {
        return [
          ...state,
          { id: state.length + 1, title: action.payload, complete: false },
        ];
      }

      case "DELETE": {
        // eslint-disable-next-line array-callback-return
        return state.filter((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
        });
      }

      default:
        return state;
    }
  };

  const [todos, setTodos] = useReducer(reducer, initialState);

  const [addTodo, setAddTodo] = useState("");

  const UpdateHandler = (id, e) => {
    setTodos({ type: "COMPLETE", payload: { id, complete: e.target.checked } });
  };

  const AddTodoList = () => {
    setTodos({
      type: "ADD",
      payload: addTodo,
    });

    setAddTodo("");
  };

  const DeleteHandler = (id) => {
    setTodos({
      type: "DELETE",
      payload: id,
    });
  };

  const list = todos?.map((todo) => (
    <li key={todo.id} className="flex items-center gap-5 mt-3">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={(e) => UpdateHandler(todo.id, e)}
      />
      <p>{todo.title}</p>
      <p>{todo.complete ? "Yes" : "No"}</p>
      <button
        className="p-2 bg-[#861212] text-white"
        onClick={() => DeleteHandler(todo.id)}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div style={{ marginLeft: "5em" }}>
      <h2>Reducer - Todo</h2>
      <input
        type="text"
        value={addTodo}
        onChange={(e) => setAddTodo(e.target.value)}
      />
      <button onClick={AddTodoList}>Add Todo</button>
      <ul>{list}</ul>
    </div>
  );
}
