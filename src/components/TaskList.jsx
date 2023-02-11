function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <h1>No tasks right now</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
