import './App.css'
import Form from "./Form.jsx"
import List from "./List.jsx"
import Task from "./Task.jsx"

import { useReducer } from 'react';
import { counterReducer } from './counterReducer.js'

function App() {

  return (
    <>
      <Form />
      <List />
    </>
  )
}

export default App


