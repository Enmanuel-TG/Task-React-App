import { useState } from "react";
import Tarea from "./Tarea";
import { uuid } from "./util/uuid";

export default function Tareas() {
  const [tasks, setTasks] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Funciona");
    const form = event.target;
    const formData = new FormData(form);
    const formValues = {
      id: uuid(),
      title: formData.get("task"),
    };
    formValues.title === ""
      ? alert("Animal esta vacio")
      : setTasks((prev) => {
          const temp = [...prev, formValues];
          return temp;
        });
    form.reset();
  }
  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <input type="submit" value="Click" />
      </form>
      <div>
        <Tarea tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
}
