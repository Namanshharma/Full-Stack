import { useState } from "react";

export function CreateToDo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" placeholder="Enter Title here..." name="Title" onChange={(e) => { setTitle(e.target.value) }}></input> <br></br><br></br>
        <input type="text" placeholder="Enter Description here..." name="Description" onChange={(e) => { setDescription(e.target.value) }}></input> <br></br><br></br>

        <button onClick={() => {
            fetch("http://localhost:4000/todoAPI/todo", {
                method: "Post", body: JSON.stringify({             // now from here we need to pick the Title and description from HTML and that we can do by using 
                    title: title,                                  // document.getElementById but that is not the correct way. 
                    description: description                       // Another way to use the State Hook for title and description which is not an optimized way as it increases RE-RENDERS in DOM
                }), headers: {                                     // There is one more optimized way by using UseEffect hook which generally prefer in REACT
                    "Content-type": "application/json"
                }
            }).then(async (res) => {
                const response = await res.json();
                if (response.Message === "Success") { alert("To Do Added Successfully") }
            })
        }}>Add a ToDo</button>
    </div >
}