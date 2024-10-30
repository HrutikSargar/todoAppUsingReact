import { useState } from "react";
import { CreateTodo } from "./Components/CreateTodo";
import "./App.css";
import { Todos } from "./Components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CreateTodo />
      <Todos></Todos>
    </div>
  );
}

export default App;
