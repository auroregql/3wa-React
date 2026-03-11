const TodoForm = (props) => {
//fonction qui permets d'ajouter une tache avec le bouton ajouter
    function handleSubmit(event)
    {
        event.preventDefault();

        if(event.target.task.value)
        {
            let task = {
                id : null,
                name: event.target.task.value,
                done:false
            };

            event.target.task.value = "";

            props.addTask(task);
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" name="task" placeholder="Nouvelle tâche..." required/>
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default TodoForm;