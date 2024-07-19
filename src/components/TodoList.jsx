import React from 'react'

export default function Todolist() {
    let todos = [
        'Exercise',
        'Food',
        'Work',
    ]

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <li className='todoItem' key={todoIndex}>
                    {todo}
                    </li>
            )
        })} 
        {/* mapping out content */}
        </ul>
  )
}

