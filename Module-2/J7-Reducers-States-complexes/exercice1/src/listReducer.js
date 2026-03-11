export const listReducer = (state, action) => {
    if (action.type === "AJOUTER") {
    const newState = []

    for (let i = 0; i < state.length; i++) {
      newState.push(state[i])
    }

    newState.push(action.payload)

    return newState
  }
    
     else if (action.type === "CHECK") {
    const newState = []

    for (let i = 0; i < state.length; i++) {
      if (i === action.payload) {
        newState.push({
          text: state[i].text,
          done: !state[i].done
        })
      } else {
        newState.push(state[i])
      }
    }

    return newState
  }
  
   else if (action.type === "SUPPRIMER") {
    const newState = []

    for (let i = 0; i < state.length; i++) {
      if (i !== action.payload) {
        newState.push(state[i])
      }
    }

    return newState
  }
  
  else {
    return state
  }
}