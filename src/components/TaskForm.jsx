import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="write your task"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Write the description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
