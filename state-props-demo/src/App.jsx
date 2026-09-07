import { useState } from "react";
import Child from "./Child";
import Hobby from "./Hobby";

function App() {
  const [name, setName] = useState("sanika sathe");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({ name: "sanika", age: 21 });
  const [tasks, setTasks] = useState(["task1", "task2", "task3"]);
  const [show, setShow] = useState(false);
      let hobby=["sing","dance","travel"];

  return (
    <>
      <h2>Name: {name}</h2>
      <button onClick={() => setName("Shubhangi sathe")}>Change Name</button>
      
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <h2>{users.name}</h2>
      <h2>{users.age}</h2>
      <button onClick={() => setUsers({ ...users, age: users.age + 1 })}>
        Update Data
      </button>

      <h2>Toggle</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Details
      </button>

      {/* Passing multiple props to your imported Child component */}
      <Child name="Sanika" age={21} />
      <Hobby h={hobby[0]}/>
    </>
  );
}

export default App;