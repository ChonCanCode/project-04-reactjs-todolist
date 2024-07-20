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