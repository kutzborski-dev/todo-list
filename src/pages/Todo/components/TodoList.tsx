import { Button } from "@mui/material";
import TodoItem from "./TodoItem";
import { DoneAll as DoneAllIcon, DeleteForever as DeleteForeverIcon, EditNote as EditNoteIcon } from '@mui/icons-material';

function TodoList({todos}: {todos: Array<object>}) {
    return (
        <div id="todo-list-container">
            <div id="todo-list-header" className="flex">
                <div className="flex flex-1">
                    <div className="mr-2">
                        <DoneAllIcon fontSize="medium" className="text-slate-700" />
                    </div>
                    <h3>Todo List Name</h3>
                </div>
                <div>
                    <Button variant="text">
                        <EditNoteIcon fontSize="medium" className="text-slate-700" />
                    </Button>

                    <Button variant="text">
                        <DeleteForeverIcon fontSize="medium" className="text-red-500" />
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