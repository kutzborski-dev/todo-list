import TodoItemType from "./TodoItemType";

type TodoListType = {
    id: number,
    name: string,
    status: string,
    data: TodoItemType[]
}

export default TodoListType;