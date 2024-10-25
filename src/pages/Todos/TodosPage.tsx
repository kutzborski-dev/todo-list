import TodoListType from "./types/TodoListType"; 
import TodoTab from "./components/TodoTab";
import ErrorMessage from "components/ErrorMessage";
import TodoHelper from "helpers/TodoHelper";

function TodosPage() {
    const todoLists: TodoListType[] = TodoHelper.getLists();

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
        </main>
    )
}

export default TodosPage;