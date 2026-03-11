function Form() {

  return (
    <>
    <form class="todo-form">
        <input type="text" name="task" placeholder="Nouvelle tâche..." required/>
        <button type="submit">Ajouter</button>
    </form>
    </>
  )
}

export default Form;