import React from "react";

const TodoItem = ({ todo, index, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <li className="flex justify-between items-center w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 shadow-sm hover:border-indigo-400/70 hover:bg-slate-900/80 transition">
      <span className="pr-3 break-words">{todo}</span>

      <button
        onClick={handleDelete}
        className="text-xs sm:text-sm bg-rose-500 hover:bg-rose-600 text-white px-3 py-1 rounded-lg shadow-sm active:scale-95 transition"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
