import { Button } from "@mui/material";
import TodoItem from "./TodoItem";
import { 
    DoneAll as DoneAllIcon,
    Settings as SettingsIcon,
    EditNote as EditNoteIcon
} from '@mui/icons-material';

function TodoList({todos}: {todos: Array<object>}) {
    return (
        <div id="todo-list-container" className="mb-4">
            <div id="todo-list-header" className="flex">
                <div className="flex flex-1 mt-1 mb-6">
                    <div className="mr-2">
                        <DoneAllIcon fontSize="small" className="text-slate-400" />
                    </div>
                    <h3 id="todo-list-name" className="text-xl leading-6">Todo List Name</h3>
                </div>
                <div>
                    <Button>
                        <EditNoteIcon fontSize="small" className="text-slate-600 mr-1" />
                        <label className="text-slate-700 cursor-pointer">Edit</label>
                    </Button>

                    <Button>
                        <SettingsIcon fontSize="small" className="text-slate-600 mr-1" />
                        <label className="text-slate-700 cursor-pointer">Settings</label>
                    </Button>
                </div>
            </div>

            <ul id="todo-list">
                {todos.map(todo => <TodoItem todo={todo} />)}
            </ul>
        </div>
    )
}

export default TodoList;