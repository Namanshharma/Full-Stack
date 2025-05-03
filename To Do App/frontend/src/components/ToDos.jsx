export function ToDos({ todos }) {
    return <div>
        {todos.map((x) => {
            return <div>
                <h1>{x.title}</h1>
                <h3>{x.description}</h3>
                <button>{x.completed === true ? "Completed" : "Mark as Done"}</button>
            </div>
        })}
    </div>
}