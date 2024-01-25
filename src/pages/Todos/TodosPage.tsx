import TodoListType from "./types/TodoListType"; 
import TodoTab from "./components/TodoTab";
import TodoDial from "./components/TodoDial";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ErrorMessage from "components/ErrorMessage";

function TodosPage() {
    const todoLists: TodoListType[] = [];

    return (
        <main>
            <h1 className="mt-1 text-2xl leading-6 font-medium mb-8">All todo lists</h1>

            {
                todoLists.length ?
                    <ul className="grid grid-cols-2">
                        {
                            todoLists.map(list => <li className="mb-2"><TodoTab list={list} /></li>)
                        }
                    </ul>
                :
                    <ErrorMessage message={<>No todo lists found. Why not start by <a href="/list/new">creating a todo list</a>?</>} />
            }

            <TodoDial
                href="/list/new"
                ariaLabel="Create new todo list"
                icon={<PlaylistAddIcon fontSize="medium" />}
            />
        </main>
    )
}

export default TodosPage;