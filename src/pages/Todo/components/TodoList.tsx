import TodoItem from "./TodoItem";

function TodoList({todos}: {todos: Array<object>}) {
    return (
        <div id="todo-list-container">
            <h3>Todo List Name</h3>

            <ul id="todo-list">
                {todos.map(todo => <TodoItem todo={todo} />)}
            </ul>
        </div>
    )
}

export default TodoList;