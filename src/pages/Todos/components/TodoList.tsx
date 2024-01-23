import TodoItem from "./TodoItem";

function TodoList({todos}: {todos: Array<object>}) {
    return (
        <ul id="todo-list">
            {todos.map(todo => <TodoItem todo={todo} />)}
        </ul>
    )
}

export default TodoList;