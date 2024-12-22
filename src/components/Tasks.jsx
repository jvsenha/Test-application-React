import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonTask from "./ButtonTask";

function Tasks(props) {
    const navigate = useNavigate();

    function SeeDetailsTask(task) {
        const query = new URLSearchParams()
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`)
    }
    return (
        <div>
            <ul className="space-y-4 bg-slate-200 p-6 rounded-md shadow">
                {props.tasks.map((task) =>
                    <li key={task.id} className=" flex gap-2">
                    
                        <ButtonTask onClick={() => props.onTaskClick(task.id)}
                            className={`bg-slate-700 w-full text-white p-2 rounded-md ${task.isCompleted ? "line-through" : ""}`}>
                            {task.title}
                        </ButtonTask>
                        <ButtonTask onClick={() => (SeeDetailsTask(task))}> <ChevronRightIcon /> </ButtonTask>
                        <ButtonTask  onClick={() => props.deleteTask(task.id)}> <TrashIcon /> </ButtonTask>
                    </li>

                )}
            </ul>
        </div>
    );
}
export default Tasks;
