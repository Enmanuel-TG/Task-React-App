export default function Tarea({ tasks }) {
    return (
        <div>
            {tasks.map((tasksItem) =>
            (<ul key={tasksItem.id}>
                <li>
                    {tasksItem.title}
                </li>
            </ul>))
            }
        </div >
    )
}