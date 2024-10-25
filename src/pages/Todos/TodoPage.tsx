import TodoList from "./components/TodoList";
import { useParams } from "react-router-dom";
import { 
    DoneAll as DoneAllIcon,
    EditNote as EditNoteIcon,
    DeleteForever as DeleteForeverIcon
} from '@mui/icons-material';
import { Button } from "@mui/material";
import ErrorMessage from "components/ErrorMessage";
import TodoHelper from "helpers/TodoHelper";
import TodoListType from "./types/TodoListType";
import { useNavigate } from "react-router-dom";

function TodoPage() {
    const navigate = useNavigate();
    const { id: listId } = useParams();

    if(!Number(listId)) return <ErrorMessage message={'Invalid todo list ID'} />

    const todoList: TodoListType | null = TodoHelper.getList(Number(listId));

    if(!todoList) return <ErrorMessage message={'Todo list not found'} />

    const allDone = () => todoList?.data?.filter(task => task.status === 'complete').length === todoList?.data.length;
    
    const handleDeleteTodoList = () => {
        TodoHelper.deleteList(Number(listId));

        navigate('/');
    }

    return (
        <main>
            <div id="todo-list-container" className="mb-4">
                <div id="todo-list-header" className="flex">
                    <div className="flex flex-1 mt-1 mb-6">
                        <div className="mr-2">
                            <DoneAllIcon fontSize="medium" className={allDone() ? "text-lime-500 dark:text-green-400" : "text-slate-400"} />
                        </div>
                        <h1 id="todo-list-name" className="text-2xl leading-6">{ todoList.name }</h1>
                    </div>
                    <div>
                        <Button href={`/list/${listId}/edit`} className="!text-slate-700 dark:!text-slate-300 hover:!bg-secondary/[.05] hover:!text-secondary dark:hover:!text-secondary">
                            <EditNoteIcon fontSize="small" className="mr-1" />
                            <label className="cursor-pointer">Edit</label>
                        </Button>
                        <Button onClick={handleDeleteTodoList} className="!text-slate-700 dark:!text-slate-300 hover:!bg-secondary/[.05] hover:!text-secondary dark:hover:!text-secondary">
                            <DeleteForeverIcon fontSize="small" className="mr-1" />
                            <label className="cursor-pointer">Delete</label>
                        </Button>
                    </div>
                </div>

                <TodoList todos={todoList.data} />
            </div>
        </main>
    )
}

export default TodoPage;