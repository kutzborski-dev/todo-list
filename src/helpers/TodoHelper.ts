import TodoItemType from "pages/Todos/types/TodoItemType";
import TodoListType from "pages/Todos/types/TodoListType";
import CacheHelper from "./CacheHelper";
const Cache = CacheHelper;

class TodoHelper {
    static createList(name: string, data: {[key: string]: FormDataEntryValue|string}) {
        const tasks: TodoItemType[] = this._formDataToItems(data);

        const list: TodoListType = {
            id: this._getLastId(),
            name,
            status: tasks.reduce((prev: string, curTask: TodoItemType, i) => {
                if(prev === 'inprogress') return prev;
                if(curTask.status !== 'complete') return curTask.status;

                return prev;
            }, 'complete'),
            data: tasks
        }

        let lists: TodoListType[] = this.getLists();
        lists.unshift(list);

        Cache.set<TodoListType[]>("lists", lists);
        return true;
    }

    static updateList(id: number, name: string, data: {[key: string]: FormDataEntryValue|string}) {
        const tasks: TodoItemType[] = this._formDataToItems(data);

        const list: TodoListType = {
            id,
            name,
            status: tasks.reduce((prev: string, curTask: TodoItemType, i) => {
                if(prev === 'inprogress') return prev;
                if(curTask.status !== 'complete') return curTask.status;

                return prev;
            }, 'complete'),
            data: tasks
        }

        let lists: TodoListType[] = this.getLists();
        lists = lists.map(l => l.id === id ? list : l);

        Cache.set<TodoListType[]>("lists", lists);
        return true;
    }

    static deleteList(id: number) {
        let lists: TodoListType[] = this.getLists();
        lists = lists.filter(list => list.id !== id);

        Cache.set<TodoListType[]>("lists", lists);
        return true;
    }

    static getLists(): TodoListType[] | [] {
        return Cache.get<TodoListType[]>("lists") ?? [];
    }

    static getList(listId: number): TodoListType | null {
        const todoLists = this.getLists();
        if(!todoLists.length) return null;

        return todoLists.find(todoList => todoList.id === listId) ?? null;
    }

    static _formDataToItems(data: {[key: string]: FormDataEntryValue|string}): TodoItemType[] {
        const tasks: TodoItemType[] = [];
        const taskCount = Object.keys(data).length / 2;
        
        /*
            Form data comes through in this format:
            todo-list-task[0][status]
            todo-list-task[0][task]
            todo-list-task[1][status]
            ...
        */

        for(var i = 0; i < taskCount; i++) {
            const taskStatus = (data[`todo-list-task[${i}][status]`] as string);
            const taskLabel = (data[`todo-list-task[${i}][task]`] as string);

            tasks.push({
                label: taskLabel,
                status: taskStatus
            });
        }

        return tasks;
    }

    static _getLastId(): number {
        // Retrieve last ID from cache
        const lists = this.getLists();

        if(!lists.length) return 1;
        return lists.length + 1;
    }
}

export default TodoHelper;