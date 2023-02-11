import { useState, useEffect } from "react";
import { tasks as data } from "../mocks/task";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
