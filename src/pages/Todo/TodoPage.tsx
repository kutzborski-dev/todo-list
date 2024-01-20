import TodoList from "./components/TodoList";

function TodoPage() {
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