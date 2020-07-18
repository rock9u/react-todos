import React, { useState } from "react";
import "./App.css";
import Form from "./Form.js";

export default () => {
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <Form
        onSubmit={(text) => {
          setTodo([text, ...todo]);
        }}
      />
      <div>
        {todo.map((text, i) => (
          <div>{text}</div>
        ))}
      </div>
    </div>
  );
};
