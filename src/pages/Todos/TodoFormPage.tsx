import { Button, FormControl, MenuItem, InputLabel } from "@mui/material";
import TextInput from "components/TextInput";
import { RemoveCircleOutline as RemoveCircleOutlineIcon, AddCircleOutline as AddCircleOutlineIcon } from '@mui/icons-material';
import { useRef, useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';

function TaskStatusSelect({id}: {id: string}) {
    const labelId = `${id}-label`;
    const [value, setValue] = useState("onhold");

    return (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 127 }}>
            <InputLabel id={labelId}>Status</InputLabel>
            <Select
                name={`${id}[]`}
                labelId={labelId}
                id={id}
                value={value}
                onChange={({target}) => setValue(v => v = target.value)}
            >
                <MenuItem value="complete">Completed</MenuItem>
                <MenuItem value="inprogress">In progress</MenuItem>
                <MenuItem value="onhold">On hold</MenuItem>
            </Select>
        </FormControl>
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
                                <div key={item} className="task flex items-center">
                                    <div className="task-status">
                                        <TaskStatusSelect id={`todo-list-task-status-${i}`} />
                                    </div>
                                    <div className="mb-4 task-input">
                                        <TextInput label="Task" name="todo-list-task[]" />
                                    </div>
                                    {
                                        i > 0 ?
                                            <div className="task-delete">
                                                <Button onClick={() => setTasks(t => {
                                                    t = t.filter((task, j) => i !== j);
                                                    return t;
                                                })} className=" !text-primary dark:!text-primary-dark hover:!bg-primary-hover/[.04] dark:hover:!bg-primary-dark-hover/15">
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
                    <Button onClick={() => setTasks(t => [...t, 'task-'+ tasks.length])} className="!text-primary dark:!text-primary-dark hover:!bg-primary-hover/[.04] dark:hover:!bg-primary-dark-hover/15 !mb-2">
                        <AddCircleOutlineIcon fontSize="small" className="mr-1.5" /> Add task
                    </Button>
                </div>
            </form>
        </main>
    )
}