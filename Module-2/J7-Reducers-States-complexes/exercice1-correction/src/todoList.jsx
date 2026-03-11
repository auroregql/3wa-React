import TodoItem from "./TodoItem.jsx";
//la to do list retourne la liste des taches y compris celles terminées et celles supprimées
const TodoList = (props) => {
    return (
        <ul className="todo-list">
            {
                props.tasks.map((task, index) =>
                    <TodoItem key={index} task={task} finishTask={props.finishTask} removeTask={props.removeTask}/>
                )
            }
        </ul>
    );
}

export default TodoList;