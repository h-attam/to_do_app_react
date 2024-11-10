import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit, FaCheck } from "react-icons/fa";
import "../App.css";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;
  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const updateTodo = () => {
    if (newTodo.trim()) { // Prevent saving empty todos
      onUpdateTodo({ id, content: newTodo });
      setEditable(false);
    }
  };

  const toggleEditable = () => {
    setEditable(!editable);
    if (!editable) {
      setNewTodo(content); // Reset content on entering edit mode
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightPink",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <div>
        {editable ? (
          <input
            style={{ width: "380px" }}
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input"
            type="text"
          />
        ) : (
          <span>{content}</span>
        )}
      </div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
        {editable ? (
          <FaCheck className="todo-icons" onClick={updateTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={toggleEditable} />
        )}
      </div>
    </div>
  );
}

export default Todo;
