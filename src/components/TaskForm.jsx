import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="write your task"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
