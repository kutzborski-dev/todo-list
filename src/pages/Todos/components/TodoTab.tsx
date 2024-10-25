import { DoneAll as DoneAllIcon } from "@mui/icons-material";
import TodoListType from "../types/TodoListType";
import { Link, Button } from "@nextui-org/react";

function TodoTab({list}: {list: TodoListType}) {
    const listItemsCompleteCount = list.data.filter(todo => todo.status === 'complete').length;

    return (
        <Button
            as={Link}
            href={`/list/${list.id}`}
            className="bg-transparent hover:!no-underline"
            startContent={<DoneAllIcon fontSize="small" className={list.status === 'complete' ? 'text-lime-500 dark:text-green-400' : list.status === 'inprogress' ? 'text-orange-400' : 'text-slate-500'} />}
        >
            <h1 className="text-xl leading-7 text-body">{list.name}</h1>
            <span className={`ml-1 ${list.status === 'complete' ? 'text-lime-500 dark:text-green-400' : 'text-slate-400 dark:text-slate-500'}`}>({listItemsCompleteCount}/{list.data.length} items done)</span>
        </Button>
    )
}

export default TodoTab;