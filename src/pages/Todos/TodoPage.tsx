import TodoList from "./components/TodoList";
import { useParams } from "react-router-dom";
import { 
    DoneAll as DoneAllIcon,
    Settings as SettingsIcon,
    EditNote as EditNoteIcon
} from '@mui/icons-material';
import { Button } from "@mui/material";
import TodoDial from "./components/TodoDial";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

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
                        <Button className="!text-slate-700 dark:!text-slate-300 hover:!bg-primary-hover/[.04] hover:!text-primary-hover dark:hover:!bg-primary-dark-hover/15">
                            <EditNoteIcon fontSize="small" className="mr-1" />
                            <label className="cursor-pointer">Edit</label>
                        </Button>

                        <Button className="!text-slate-700 dark:!text-slate-300 hover:!bg-primary-hover/[.04] hover:!text-primary-hover dark:hover:!bg-primary-dark-hover/15">
                            <SettingsIcon fontSize="small" className="mr-1" />
                            <label className="cursor-pointer">Settings</label>
                        </Button>
                    </div>
                </div>

                <TodoList todos={todoDummyData} />
            </div>

            <TodoDial
                ariaLabel="Create new todo list item"
                icon={<PlaylistAddIcon fontSize="medium" />}
            />
        </main>
    )
}

export default TodoPage;