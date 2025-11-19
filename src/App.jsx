import { useState } from "react";
import TextInput from "./components/TextInput.jsx";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, inputValue.trim()]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3  mt-7 ">
      <h1>Todo App</h1>
      <TextInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSubmit={handleSubmit}
      />
      <ul className="flex flex-col items-center">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
