import TodoList from "./components/TodoList";
import { useParams } from "react-router-dom";
import { 
    DoneAll as DoneAllIcon,
    EditNote as EditNoteIcon
} from '@mui/icons-material';
import { Button } from "@mui/material";

function TodoPage() {
    const { id: listId } = useParams();

    if(!listId) return <h3 className="text-2xl leading-6 text-center">Todo list not found</h3>;
    
    const todoDummyData = [{
        label: "Test",
        status: "complete"
    }, {
        label: "Test again",
        status: "ongoing"
    }, {
        label: "Last test",
        status: "onhold"
    }];

    const allDone = () => todoDummyData.filter(task => task.status === 'complete').length === todoDummyData.length;

    return (
        <main>
            <div id="todo-list-container" className="mb-4">
                <div id="todo-list-header" className="flex">
                    <div className="flex flex-1 mt-1 mb-6">
                        <div className="mr-2">
                            <DoneAllIcon fontSize="medium" className={allDone() ? "text-lime-500 dark:text-green-400" : "text-slate-400"} />
                        </div>
                        <h1 id="todo-list-name" className="text-2xl leading-6">Todo List Name</h1>
                    </div>
                    <div>
                        <Button className="!text-slate-700 dark:!text-slate-300 hover:!bg-secondary/[.05] hover:!text-secondary dark:hover:!text-secondary">
                            <EditNoteIcon fontSize="small" className="mr-1" />
                            <label className="cursor-pointer">Edit</label>
                        </Button>
                    </div>
                </div>

                <TodoList todos={todoDummyData} />
            </div>
        </main>
    )
}

export default TodoPage;