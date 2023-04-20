import { useState } from "react";

function uuid () {
    if(crypto.randomUUID) {
        return crypto.randomUUID()
    }

    return Math.random().toString(36)
}

export function App() {
    const [tasks, setTasks] = useState([])

    function handleClick(event) {
        event.preventDefault()
        console.log("Hola")
        const form = event.target;
        const formData = new FormData(form);
        const formValues = {
            id: uuid(),
            title: formData.get('task'),
            completed: Boolean(formData.get('completed'))
        }
        
        // TODO: Validar que el formulario no este vacio
        
        setTasks((prev) => {
          const temp = [...prev, formValues]
          return temp  
          
          // No usar, muy lenta:
          // prev.push(formValues)
          // return prev
        })

        // TODO: Limpiar formulario cuando se envia
    }

    return (
        <div>
            {/* Form */}
            <form onSubmit={handleClick} style={{ display: 'flex', flexDirection: 'column' }}>
                {/* TaskField */}
                <input
                    type="text"
                    placeholder="Add Task"
                    name="task"
                    id="task"
                />
                {/* IsCompletedField */}
                <div>
                    <span>Is completed?</span>
                    <input type="checkbox" name="completed" id="completed" />
                </div>
                {/* SubmitButton */}
                <input type="submit" value="Click" />
            </form>
            {/* TaskGroup */}
            <ul>
                {/* <li>This is mi first task</li>
                <li style={{
                    textDecoration: "line-through"
                }}>This is mi second task that is completed</li> */}
                {
                    tasks.length === 0 ? (<h4>No hay tareas</h4>) : tasks.map((taskItem) => (
                        // TaskItem
                        // TODO: Ponerle la rayita si taskItem.completed es true
                        <li key={taskItem.id}>
                            {taskItem.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}