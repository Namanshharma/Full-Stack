import { useState } from 'react';
import './App.css'
import { CreateToDo } from "./components/CreateToDo.jsx";
import { ToDos } from "./components/ToDos.jsx";

function App() {

  const [todos, setToDos] = useState([]);

  fetch("").then(async (res) => {
    const response = await res.json();
    setToDos(response.Data)
  })
  return (
    <div>
      <CreateToDo></CreateToDo>
      <ToDos todos={todos
        // [
        //   { title: "asdfa", description: "asdfjahskefhakw", completed: false },
        //   { title: "asdfa", description: "asdfjahskefhakw", completed: false },
        // ]
      }></ToDos>
    </div>
  )
}

export default App