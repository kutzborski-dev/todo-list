import { Button } from "@mui/material";
import TextInput from "components/TextInput";
import { RemoveCircleOutline as RemoveCircleOutlineIcon, AddCircleOutline as AddCircleOutlineIcon } from '@mui/icons-material';
import { useRef, useState } from "react";
import { useThemeContext } from "context/themeContext";
import { Select, SelectItem } from "@nextui-org/react";

function TaskStatusSelect({id}: {id: string}) {
    const labelId = `${id}-label`;
    const [value, setValue] = useState("onhold");
    const { theme } = useThemeContext();
    const animals = [{label: 'test', value: 'hi'}];

    return (
        <Select 
            variant={'underlined'}
            label="Status" 
            className="max-w-xs"
            classNames={{
                popoverContent: 'bg-red-900'
            }}
          >
            {animals.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
    )
}

export default function TodoFormPage() {
    const [tasks, setTasks] = useState<string[]>(['task-0']);
    const formRef = useRef(null);

    return (
        <main>
            <form ref={formRef} method="POST">
                <div className="mb-8">
                    <TextInput label="Todo list name" fontSize="!text-2xl" name="todo-list-name" />
                </div>
                <div id="task-area">
                    <div id="tasks">
                        {
                            tasks.map((item, i) => (
                                <div key={item} className="task flex items-center mt-3">
                                    <div className="task-status min-w-28">
                                        <TaskStatusSelect id={`todo-list-task-status-${i}`} />
                                    </div>
                                    <div className="task-input self-end">
                                        <TextInput label="Task" name="todo-list-task[]" />
                                    </div>
                                    {
                                        i > 0 ?
                                            <div className="task-delete">
                                                <Button onClick={() => setTasks(t => {
                                                    t = t.filter((task, j) => i !== j);
                                                    return t;
                                                })} className=" !text-primary hover:!bg-secondary/[.05] dark:hover:!bg-secondary/10">
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
                    <Button onClick={() => setTasks(t => [...t, 'task-'+ tasks.length])} className="!text-primary hover:!bg-secondary/[.05] dark:hover:!bg-secondary/12 !mb-2 !mt-4">
                        <AddCircleOutlineIcon fontSize="small" className="mr-1.5" /> Add task
                    </Button>
                </div>
            </form>
        </main>
    )
}