import { useState } from 'react';
import './App.css'
import { CreateToDo } from "./components/CreateToDo.jsx";
import { ToDos } from "./components/ToDos.jsx";

function App() {

  const [todos, setToDos] = useState([]);

  fetch("").then(async (res) => {     // need to call the Get todo APIs here. Also this not an optimzied way as we need to use the UseEffect hook. Also need to use Axios library to call API
    const response = await res.json();
    setToDos(response.Data)
  })
  return (
    <div>
      <CreateToDo></CreateToDo>
      <ToDos todos={todos}></ToDos>
      {/* // [
        //   { title: "asdfa", description: "asdfjahskefhakw", completed: false },
        //   { title: "asdfa", description: "asdfjahskefhakw", completed: false },
        // ] */}
    </div>
  )
}

export default App