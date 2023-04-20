import { useState } from "react";

export function App() {
    const [taskValue, setTaskValue] = useState("")

    function handleClick(event) {
        event.preventDefault()
        setTaskValue("")
        console.log("Hola")
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <input
                    type="text"
                    placeholder="Add Task" 
                    name="task" 
                    id="task" 
                    value={taskValue} 
                    onChange={(event) => {
                        setTaskValue(event.target.value)
                    }} 
                />
                <input type="submit" value="Click" />
            </form>
        </div>
    )
}