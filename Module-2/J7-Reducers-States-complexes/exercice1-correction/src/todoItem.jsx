const TodoItem = (props) => {
//Si la fonction de supprimer est activée alors on retire la tache
    function handleRemove()
    {
        props.removeTask(props.task);
    }
//Si la fonction de cocher est activée alors on coche et barre la tache
    function handleCheck()
    {
        props.finishTask(props.task);
    }

    if(props.task.done)
    {
        return (
            <li className="todo-item">
                <input type="checkbox" id={"task" + props.task.id} onChange={handleCheck} checked={true}/>
                <label htmlFor={"task" + props.task.id} className="task-text">{ props.task.name }</label>
                <button className="delete-btn" onClick={handleRemove}>&times;</button>
            </li>
        );
    }
    else
    {
        return (
            <li className="todo-item">
                <input type="checkbox" id={"task" + props.task.id} onChange={handleCheck} checked={false}/>
                <label htmlFor={"task" + props.task.id} className="task-text">{ props.task.name }</label>
                <button className="delete-btn" onClick={handleRemove}>&times;</button>
            </li>
        );
    }
}

export default TodoItem;