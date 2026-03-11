const Task = (props) => {

  return (
    <>
        <li class="todo-item">
            <input type="checkbox" id="task1"/>
            <label for="task1" class="task-text">Coder le design dark mode</label>
            <button class="delete-btn">&times;</button>
        </li>
        <li class="todo-item">
            <input type="checkbox" id="task2"/>
            <label for="task2" class="task-text">Préparer le café</label>
            <button class="delete-btn">&times;</button>
        </li>
        <li class="todo-item">
            <input type="checkbox" id="task3"/>
            <label for="task3" class="task-text">Dominer le monde (ou presque)</label>
            <button class="delete-btn">&times;</button>
        </li>
    </>
  )
}

export default Task;