import Input from "components/Input";
import { RemoveCircleOutline as RemoveCircleOutlineIcon, AddCircleOutline as AddCircleOutlineIcon } from '@mui/icons-material';
import { FormEvent, useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import TodoTaskStatusSelect from "./components/TodoTaskStatusSelect";
import TodoHelper from "helpers/TodoHelper";
import { useNavigate } from "react-router-dom";

export default function TodoFormPage() {
    const [tasks, setTasks] = useState<string[]>(['task-0']);
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

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

        TodoHelper.createList(listName, data);

        navigate('/', {
            state: {
                flash: {
                    message: `Todo list ${listName} created`,
                    status: 'success'
                }
            }
        });
    };

    return (
        <main>
            <form ref={formRef} method="POST" onSubmit={handleSubmitList}>
                <div className="mb-8 md:w-[100%] lg:w-[40%]">
                    <Input label="Todo list name" name="todo-list-name" />
                </div>
                <div id="task-area">
                    <div id="tasks" className="w-[100%]">
                        {
                            tasks.map((item, i) => (
                                <div key={item} className="task flex items-center mt-3 gap-1 md:w-[100%] lg:w-[40%]">
                                    <div className="task-status min-w-32">
                                        <TodoTaskStatusSelect id={`todo-list-task-status-${i}`} name={`todo-list-task[${i}][status]`} />
                                    </div>
                                    <div className="task-input self-end flex-1">
                                        <Input
                                            label="Task"
                                            name={`todo-list-task[${i}][task]`}
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
                    Create List
                </Button>
            </form>
        </main>
    )
}