import { useReducer } from "react";

import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
import listReducer from "./listReducer.js";
import './App.css'

//fonction qui reunit les différentes actions avec le useReducer en retournant le container de la todolist
function App() {
    const [state, dispatch] = useReducer(listReducer, {tasks: []});

    function addTask(task)
    {
        dispatch({ type: "add_task", task: task });
    }

    function finishTask(task)
    {
        dispatch({ type: "finish_task", task: task });
    }

    function removeTask(task)
    {
        dispatch({ type: "remove_task", task: task });
    }

    return (
        <div className="todo-container">
            <h1>Ma Liste</h1>
            <TodoForm addTask={addTask} />
            <TodoList tasks={state.tasks} finishTask={finishTask} removeTask={removeTask}/>
        </div>
    )
}

export default App