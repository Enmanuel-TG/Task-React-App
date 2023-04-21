import Edit from "./Botones/Edit";

export default function Tarea({ tasks, setTasks }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <h3>Aun no hay tareas</h3>
      ) : (
        tasks.map((tasksItem) => (
          <ul key={tasksItem.id}>
            <li>
              {tasksItem.title}<Edit tasks={tasks} setTasks={setTasks}/>
            </li>
          </ul>
        ))
      )}
    </div>
  );
}
