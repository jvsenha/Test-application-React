import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TasksPages() {
    const [shearchParams] = useSearchParams();
    const title = shearchParams.get("title");
    const description = shearchParams.get("description");
    const navigates = useNavigate();
    return (
        <div className="w-screen h-screen bg-slate-500 p-6 ">

            <div className="min-h-screen bg-slate-500 flex justify-center p-6">
                <div className="w-full space-y-5">
                    <div className="flex justify-center relative mb-6">
                        <button onClick={() => navigates(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
                            <ChevronLeftIcon />
                        </button>
                        <h1 className="text-3xl text-slate-100 font-bold text-center">
                            Detalhes da tarefas
                        </h1>
                    </div>
                    <div className="bg-slate-400 p-4 rounded-mds shadow rounded-md">
                        <h2 className="text-xl text-white font-bold">{title}</h2>
                        <p className="text-white">{description}</p>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default TasksPages;