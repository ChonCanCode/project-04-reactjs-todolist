import React from 'react'
//the syntax above is to import the React's library into the JS file.
// `import React` = Imports the React object
// `from 'react'` = specifies that the import is from the 'react' package installed in the project.

export default function TodoList() {
    // TodoList is a component - 
    //`export` statement making such component can be shared to other files
    //`default` designated the `TodoList` into a default exportable file type enabling it to be imported with out {}.
    let todos = [
        'Exercise',
        'Food',
        'Work',
    ]

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            {/* `.map()` create a new array and running function on each elements within itself */}
            return (
                //`return` statement contains JSX, which describes what should be rendered to the DOM.
                <li className='todoItem' key={todoIndex}>
                    {/* `key={}`helps React identify each items in the `todos` have changed, 
                    are added, or are removed. This is crucial for React to efficiently update 
                    the DOM. */}
                    {todo}
                    {/* `<li>{todo}</li> assining each element in TodoList into <li> element tag 
                    and thereofore making it visable in HTML*/}
                    {/* `{todo}` braces {} are used to insert JavaScript expressions directly into the !rendered output!.*/} 
                    </li>
            )
        })} 
        {/* mapping out content */}
        </ul>
  )
}