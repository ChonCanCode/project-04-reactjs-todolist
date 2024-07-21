import {useState} from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() { 
//highest level parent component

const [todos, setTodos] = useState([
  'Exercise',
  'Food',
  'Work',
])

function handleAddTodos (newTodo) {
  const newTodoList = [...todos, newTodo]
  setTodos(newTodoList)
}

function handleDeleteTodo (index) {
  const newTodoList = todos.filter((todo, todoIndex) => {
    return todoIndex !== index
  })
  setTodos(newTodoList)
}

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} />
    </>
  )
}

export default App
