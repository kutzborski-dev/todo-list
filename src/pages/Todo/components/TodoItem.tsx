function TodoItem({todo}: {todo: any}) {
    return (
        <li>
            <span className="w-3 h-3 bg-[#ff0000] inline-block mr-2 rounded-full"></span>
            {todo.label}
        </li>
    )
}

export default TodoItem;