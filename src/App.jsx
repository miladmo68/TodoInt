import { useState } from "react";
import TextInput from "./components/TextInput.jsx";
import TodoItem from "./components/TodoItem.jsx";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-5">
        <h1 className="text-center text-3xl font-semibold text-white drop-shadow-sm">
          Todo App
        </h1>

        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-5 space-y-4">
          <TextInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            onSubmit={handleSubmit}
          />

          {todos.length === 0 ? (
            <p className="text-slate-300 text-sm text-center">
              هنوز کاری اضافه نکردی. یه کار جدید بنویس و Add رو بزن ✏️
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {todos.map((todo, index) => (
                <TodoItem
                  key={index}
                  todo={todo}
                  index={index}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
            </ul>
          )}
        </div>

        <p className="text-center text-xs text-slate-400">
          Crafted by <span className="text-indigo-400 font-medium">Milad</span>{" "}
          ·{" "}
          <a
            href="https://miladweb.com"
            className="text-teal-300 hover:text-teal-200 transition"
          >
            miladweb.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
