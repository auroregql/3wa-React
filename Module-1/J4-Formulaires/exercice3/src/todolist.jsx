import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Tache 1", "Tache 2", "Tache 3"]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Tâche :</label>
        <input
          type="text"
          id="task"
          name="task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
}

export default ToDoList;
