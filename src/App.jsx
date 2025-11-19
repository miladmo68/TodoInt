import { useState } from "react";
import TextInput from "./components/TextInput";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col items-center justify-center gap-3  mt-7 ">
      <h1>Todo App</h1>
      <TextInput />
    </div>
  );
}

export default App;
