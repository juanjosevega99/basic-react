import { useState, useEffect } from "react";
import { tasks as data } from "./mocks/task";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      <TaskForm />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
