import Input from "components/Input";
import { RemoveCircleOutline as RemoveCircleOutlineIcon, AddCircleOutline as AddCircleOutlineIcon } from '@mui/icons-material';
import { FormEvent, useRef, useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import TodoTaskStatusSelect from "./components/TodoTaskStatusSelect";
import TodoHelper from "helpers/TodoHelper";
import { useNavigate, useParams } from "react-router-dom";
import ErrorMessage from "components/ErrorMessage";
import TodoListType from "./types/TodoListType";
import TodoItemType from "./types/TodoItemType";

export default function TodoFormPage() {
    const { id: listId } = useParams();

    const [list, setList] = useState<TodoListType>();
    const [tasks, setTasks] = useState<string[]>([]);
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
  
    if(listId && !Number(listId)) return <ErrorMessage message={'Invalid todo list ID'} />

    if(listId) {
        const todoList: TodoListType|null = TodoHelper.getList(Number(listId));
        if(!todoList) return <ErrorMessage message={'Todo list not found'} />

        if(!list) {
            setList(todoList);
        }

        if(!tasks.length) {
            const todoTaskLabels: string[] = [];
    
            for(const task of todoList.data) {
                todoTaskLabels.push(task.label);
            }
    
            setTasks(todoTaskLabels);
        }
    } else {
        if(!tasks.length) {
            setTasks(['task-0']);
        }
    }

    const handleAddTask = () => setTasks(t => [...t, 'task-'+ tasks.length]);
    const handleRemoveTask = (i: number) => {
        setTasks(t => {
            t = t.filter((task, j) => i !== j);
            return t;
        });
    };
    const handleSubmitList = (e: FormEvent) => {
        e.preventDefault();
        const form = formRef.current;
        if(!form) return;

        const formData = new FormData(form);
        let data = Object.fromEntries(formData.entries());

        let listName = (data['todo-list-name'] as string);
        delete data['todo-list-name'];

        if(list) {
            TodoHelper.updateList(Number(listId), listName, data);
        } else {
            TodoHelper.createList(listName, data);
        }

        navigate('/');
    };

    return (
        <main>
            <form ref={formRef} method="POST" onSubmit={handleSubmitList}>
                <div className="mb-8 md:w-[100%] lg:w-[40%]">
                    <Input label="Todo list name" name="todo-list-name" defaultValue={list?.name ?? ''} />
                </div>
                <div id="task-area">
                    <div id="tasks" className="w-[100%]">
                        {
                            tasks.map((item, i) => (
                                <div key={item} className="task flex items-center mt-3 gap-1 md:w-[100%] lg:w-[40%]">
                                    <div className="task-status min-w-32">
                                        <TodoTaskStatusSelect id={`todo-list-task-status-${i}`} name={`todo-list-task[${i}][status]`} defaultSelectedKeys={list?.data[i].status ? [list.data[i].status] : undefined} />
                                    </div>
                                    <div className="task-input self-end flex-1">
                                        <Input
                                            label="Task"
                                            name={`todo-list-task[${i}][task]`}
                                            defaultValue={list?.data[i].label ?? ''}
                                        />
                                    </div>
                                    {
                                        i > 0 ?
                                            <div className="task-delete md:w-[10] lg:w-0">
                                                <Button onClick={() => handleRemoveTask(i)} className="text-primary bg-transparent hover:!bg-secondary/[.05] dark:hover:!bg-secondary/10">
                                                    <RemoveCircleOutlineIcon fontSize="small" />
                                                </Button>
                                            </div>
                                        :
                                            null
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div id="task-area-add-button" className="md:w-[100%] lg:w-[40%] flex justify-end">
                        <Button
                            radius="sm"
                            onClick={handleAddTask}
                            startContent={<AddCircleOutlineIcon fontSize="small" className="mr-1.5" />}
                            className="text-primary bg-transparent hover:bg-secondary/[.05] dark:hover:bg-secondary/12 mb-1 mt-4 gap-0"
                        >
                            Add task
                        </Button>
                    </div>
                </div>

                <Button
                    type="submit"
                    radius="sm"
                    className="text-primary bg-secondary/[.05] hover:bg-secondary/[.15] dark:hover:bg-secondary/12 mb-2 mt-2 text-base gap-0"
                >
                    {list ? 'Update' : 'Create'} List
                </Button>
            </form>
        </main>
    )
}