# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# dev-logs
 
This project aims to enhance my JavaScript knowledge through hands-on experience, focusing on practical skills and application.

**2024.07.19**
- File creation and configeration
- To create reactjs folder. ensure node is install by running node -v > npm create vite@latest (folder name) > select React & JS
- React code convert into HTML then rendered insdie of <div id="root"></div>
- On writing with react we use componentry to compartmentalise our application to prevent writing code repeatedly
- Also to categorise our application into components of related logic
- components in react means functional components
    - The function name always CAPITALISED same as the component's file name.
    - The return from the function is known as `jsx`
        - `jsx`is HTML play old HTML that we can write JS inside of it.
- Installed react extension enabling rfc shortcut
- You can have components within components within components 
- App.jsx (highest level parent component) make sure in the folder there is code importanting jsx from other files to there.
- Terminal npm install (installing the react & react-dom)> npm run dev shows the following
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

**2024.07.20**
- remember to run > npm run dev in active host servier. 
- `JS` .map() used on arrays to create a new array by applying a function to each element of the original array. Inside the .map() array function will be used often as a function is require to apply on each element and split out a new array. use on array create a new array.
- `JSX` file type is a JaaScript file with an additional feature: it allows you to write JSX syntax. JSX stands for JavaScript XML, and it lets you write HTML-like code within JavaScript.
- `REACT` `export default` *export* statement in JS is about making code from one file available to other files. *default* refers to a special kind of export. This keyword is used to designate one main export from a module which can then be imported wihout using curly braces.
- this means when the Todolist() {} is designated as a default export. Later on in other file it can can be imported as in below format
  - `import Todolist from TodoList` with out {} if it is not a default export type then it will be `import {Todolist} from TodoList`.
- `REACT` a prop = property is a specioal keyword used to pass data from a parent component to a child component. Props allow you to customise and confiure childre components by providing them with data or functions. `key={todo.id}`.
- `REACT` Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components
- The `DOM` (Document Object Model) is a programming interface for web documents. It represents the structure of a document (such as an HTML or XML file) as a tree of objects, allowing programs and scripts to dynamically access and update the content, structure, and style of the document.
- In React, a `prop` (short for "property") is a special keyword used to pass data from one `component` to another. Props are `read-only` attributes that are passed from a `parent` component to a `child` component, enabling the child component to receive and use information provided by the parent. They are a core concept in React, allowing components to be dynamic and reusable.

**2024.07.21**
- Term `Attribute` in `REACT` refers to the properties or characteristics that are set on React elements, often corresponding to HTML attributes but within the context of JSX. These attributes define various aspect of the elements.
- Term `Stateful variable` in `REACT` refers to a piece of data that is managed by the component's state. This data can change over time and when it does, it triggers a re-render of the component to reflect the updated state. Stateful variables are part of the component's state, managed using the useState hook (in functional components) or the this.state object and this.setState method (in class components).
```
const [todos, setTodos] = useState([
  'Exercise',
  'Food',
  'Work',
])

```
- `useState` is a Hook provided by React for managing state in functional components. When calling it it return with two elements:
 - The current state value (todos)
 - A function to update the state(setTodos)
- `setTodos` can be named whatever, it become the function that allows you to update the state. When you call this function with a new state value, React updates the state and triggers a re-render of the component with the new state.
- Unsure how (newTodo) is able to pick up the new input and assign it to (newTodo)
```
function handleAddTodos (newTodo) {
  const newTodoList = [...todos, newTodo]
  setTodos(newTodoList)
}
```

- todoValue capture the input and assiged the value under the todoValue variable.
```
export default function TodoInput(props) {
    const {handleAddTodos} = props;
    const [todoValue, setTodoValue] = useState('')
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
               setTodoValue(e.target.value) 
            }
            } placeholder="Enter todo..."/>
            <button onClick={() => {
                handleAddTodos(todoValue);
            }}>Add</button>
        </header>
    )
}
```

- Breakdown of `e.target.value`
    e: This represents the event object that is passed to event handlers in JavaScript. It contains information about the event that occurred, such as the type of event and the target element.

    e.target: The target property of the event object refers to the DOM element that triggered the event. For example, if a user types in an input field, e.target will be the input field itself.

    e.target.value: The value property of e.target contains the current value of the form element that triggered the event. For an <input> element, this is the text currently entered in the input field.


**2024.07.22**
- Have a better idea of how the add session works, will try to put it in writing later.
- Working on Delete button today.
- Reading the code over and over trying to understand how the delete mechanchic work.


**2024.07.23**
- Understand how each step work step by step: https://chatgpt.com/share/a8baeab0-90a8-4f34-b73d-2f7ec1554cfe
- Code of logic: https://chatgpt.com/share/a8baeab0-90a8-4f34-b73d-2f7ec1554cfe


**2024.07.26**
- Project completed but struggle to understand how each step work from beginning to end. 
- Need to look for a more basic project to learn JS from.