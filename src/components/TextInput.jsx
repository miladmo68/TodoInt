import React from "react";

const TextInput = ({ inputValue, setInputValue, onSubmit }) => {
  return (
    <form className="border p-2 border-gray-300" onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Add a new todo..."
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default TextInput;
