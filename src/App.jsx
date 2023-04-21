import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import { useListContext } from "./context/ListContext";

function App() {
  const { list, setList } = useListContext();
  const [task, setTask] = useState("");
  const [option, setOption] = useState("quick");
  const updateList = (e) => {
    e.preventDefault();
    const data = { task, id: uuid() };
    switch (option) {
      case "quick":
        setList({ ...list, quick: [...list.quick, data] });
    }
  };
  return (
    <div>
      <form onSubmit={updateList}>
        <input
          type="text"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value={"quick"}>Quick</option>
          <option value="today">Today</option>
          <option value="backlog">Backlog</option>
          <option value="conpleted">Completed</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
