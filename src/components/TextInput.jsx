import React from "react";

const TextInput = ({ inputValue, setInputValue, onSubmit }) => {
  return (
    <form
      className="flex gap-2 items-center bg-slate-900/60 border border-white/10 rounded-xl px-3 py-2"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        value={inputValue}
        placeholder="Add a new todo..."
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 bg-transparent outline-none text-sm text-slate-100 placeholder:text-slate-500"
      />

      <button
        type="submit"
        className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-md hover:from-indigo-400 hover:to-purple-400 active:scale-95 transition"
      >
        Add
      </button>
    </form>
  );
};

export default TextInput;
