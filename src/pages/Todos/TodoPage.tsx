import TodoList from "./components/TodoList";
import { useParams } from "react-router-dom";

function TodoPage() {
    const { id: listId } = useParams();

    if(!listId) return <h3 className="text-2xl leading-6">"Todo list not found"</h3>;
    
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
    return (
        <main>
            <TodoList todos={todoDummyData} />
        </main>
    )
}

export default TodoPage;