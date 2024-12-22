import { useState } from "react"
import InputTask from "./InputTask";
import ButtonTask from "./ButtonTask";

function AddTask({ onAddTask, fetchTasks }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 bg-slate-200 p-6 rounded-md shadow">
            <InputTask value={title} onChange={(event) => setTitle(event.target.value)} type={"text"} placeholder="Digite o nome da tarefa" />
            <InputTask value={description} onChange={(event) => setDescription(event.target.value)} type={"text"} placeholder="Digite a descrição da tarefa" />
            <div className="flex space-x-1">

                <ButtonTask onClick={() => {

                    if (!title.trim() || !description.trim()) {
                        return alert("preencha todos os campos");
                    }

                    onAddTask(title, description);
                    setTitle("");
                    setDescription("");
                }} person="w-full">
                    Adicionar
                </ButtonTask>
                <ButtonTask person="w-full"
                onClick={()=> fetchTasks()}>
                    Adicionar exemplor
                </ButtonTask>
            </div>
        </div>
    )
}

export default AddTask