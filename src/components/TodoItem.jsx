import React from "react";

const TodoItem = ({ todo, index, todos, setTodos, key }) => {
  const handleDelete = () => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <li
      key={key}
      className="flex justify-between items-center w-80 border p-3 text-xs"
    >
      <spam>{todo}</spam>
      <button
        onClick={handleDelete}
        className="bg-gray-300 px-3 py-1 border rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
