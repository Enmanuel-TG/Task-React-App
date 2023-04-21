import { useState } from "react";
export default function Edit({ tasks, setTasks }) {
  const [isEdit, setIsEdist] = useState(false);

  function handleClickOFF() {
    setIsEdist(true);
  }
  function handleClickON(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const newValor = formData.get("newTask");
    setTasks(newValor);

    setIsEdist(false);
  }

  function EditOFF() {
    return (
      <div>
        <button onClick={handleClickOFF}>Edit</button>
      </div>
    );
  }
  function EditON() {
    return (
      <form onSubmit={handleClickON}>
        <input value={tasks.title} type="text" name="newTask"/>
        <button type="submit">Updata</button>
      </form>
    );
  }
  return <div>{isEdit ? EditON() : EditOFF()}</div>;
}
