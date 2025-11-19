import React from "react";

const TextInput = ({ inputValue, setInputValue }) => {
  return (
    <form className="border p-2 border-gray-300">
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
