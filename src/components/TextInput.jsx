import React from "react";

const TextInput = (inputValue, setInputValue) => {
  return (
    <form className="border p-2 border-gray-300">
      <input type="text" placeholder="Add a new todo..." />
    </form>
  );
};

export default TextInput;
