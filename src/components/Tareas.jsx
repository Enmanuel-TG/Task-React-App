import { useState } from "react";
import Tarea from "./Tarea";

function uuid() {
    if (crypto.randomUUID) {
        return crypto.randomUUID()
    }
    return Math.random().toString(36)
};

export default function Tareas() {
    const [tasks, setTasks] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Funciona");
        const form = event.target;
        const formData = new FormData(form)
        const formValues = {
            id: uuid(),
            title: formData.get('task'),
        };
        formValues.title === "" ? 
            alert("Animal esta vacio")
         : setTasks(
            (prev) => {
                const temp = [...prev, formValues];
                return temp
            }
        )
        form.reset()

    }
    return (
        <div>
            <form className="container" onSubmit={handleSubmit}>
                <input type="text" name="task" />
                <input type="submit" value="CLick" />
            </form>
            <div>
                <Tarea tasks={tasks} />
            </div>
        </div>
    )
}