import { useState } from "react";
import { CreateTodo } from "./Components/CreateTodo";
import "./App.css";
import { Todos } from "./Components/Todos";
import { ThirdComponent } from "./Components/Third";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CreateTodo />
      <Todos></Todos>
      <ThirdComponent></ThirdComponent>
    </div>
  );
}

export default App;
