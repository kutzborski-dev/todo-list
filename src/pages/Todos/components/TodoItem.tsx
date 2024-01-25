import { Done as DoneIcon } from "@mui/icons-material";

function TodoItem({todo}: {todo: any}) {
    return (
        <li className="flex">
            <div className="mr-2 w-4 text-center">
                {
                    todo.status == 'complete' ?
                        <DoneIcon fontSize="small" className="text-lime-500 dark:text-green-400" />
                    :
                        <span className="mt-2 w-3 h-3 bg-[#ff0000] inline-block rounded-full"></span>
                }
            </div>
            <div className={`leading-7 ${todo.status == 'complete' && 'line-through text-slate-400'}`}>
                {todo.label}
            </div>
        </li>
    )
}

export default TodoItem;