import TodoListType from "./types/TodoListType"; 
import TodoTab from "./components/TodoTab";

function TodosPage() {
    const todoLists: TodoListType[] = [
        {
            id: 1,
            name: "Chores",
            status: "complete",
            data: [
                {
                    label: "Vacuum cleaning",
                    status: "complete"
                },
                {
                    label: "Mopping",
                    status: "complete"
                },
                {
                    label: "Cleaning bathroom",
                    status: "complete"
                }
            ]
        },
        {
            id: 2,
            name: "Household fixes",
            status: "onhold",
            data: [
                {
                    label: "Door knob nail",
                    status: "onhold"
                },
                {
                    label: "Switch dead bulb",
                    status: "complete"
                }
            ]
        },
        {
            id: 3,
            name: "Shopping",
            status: "onhold",
            data: [
                {
                    label: "Groceries",
                    status: "onhold"
                },
                {
                    label: "Clothes",
                    status: "onhold"
                }
            ]
        }
    ];

    return (
        <main>
            <h1 className="mt-1 text-2xl leading-6 font-medium mb-8">All todo lists</h1>

            <ul className="grid grid-cols-2">
                {
                    todoLists.map(list => <li className="mb-2"><TodoTab list={list} /></li>)
                }
            </ul>
        </main>
    )
}

export default TodosPage;