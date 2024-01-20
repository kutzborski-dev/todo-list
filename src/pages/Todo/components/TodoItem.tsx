function TodoItem({todo}: {todo: any}) {
    return (
        <li>{todo.label}</li>
    )
}

export default TodoItem;