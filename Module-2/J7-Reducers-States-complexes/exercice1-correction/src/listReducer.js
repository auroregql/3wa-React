//le reducer affiche l'action en prenant en compte l'etat et l'action

const listReducer = (state, action) => {

    console.log(action);

//Si l'action est ajouter une tache alors on créé une nouvelle ligne de tache au dessus de celles existantes et on l'affiche//
    if(action.type === "add_task")
    {
        let newTasks = Array.from(state.tasks);
        action.task.id = newTasks.length;
        newTasks.push(action.task);

        console.log(newTasks);

        return { tasks: newTasks }
    }
    
    // Sinon si l'action est de terminé une tache, pour une tache terminée parmis celles existantes alors il affiche la nouvelle tache
    else if(action.type === "finish_task")
    {
        let newTasks = Array.from(state.tasks);

        for(let task of newTasks)
        {
            if(task.id === action.task.id)
            {
                task.done = true;
            }
        }

        console.log(newTasks);

        return { tasks: newTasks }
    }
    
    //Si une tache est supprimé parmis celles existantes, alors une nouvelle tache est affichée
    else if(action.type === "remove_task")
    {
        let newTasks = Array.from(state.tasks);

        for(let i = 0; i < newTasks.length; i++)
        {
            if(newTasks[i].id === action.task.id)
            {
                newTasks = newTasks.toSpliced(i, 1);
            }
        }

        console.log(newTasks);

        return { tasks: newTasks }
    }
    else
    {
        return state;
    }

}