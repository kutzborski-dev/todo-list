import { Done as DoneIcon } from "@mui/icons-material";

function TodoItem({todo}: {todo: any}) {
    let statusIcon;
    
    switch(todo.status) {
        case "complete":
            statusIcon = <DoneIcon fontSize="small" className="text-success" />;
        break;

        case "inprogress":
            statusIcon = <div className={"mt-2 w-3 h-3 inline-block rounded-full bg-alert"}></div>;
        break;
        
        case "onhold":
            statusIcon = <div className={"mt-2 w-3 h-3 inline-block rounded-full bg-body"}></div>;
        break;
    }

    return (
        <li className="flex">
            <div className="mr-2 w-4 text-center">
                {statusIcon}
            </div>
            <div className={`leading-7 ${todo.status == 'complete' && 'line-through text-slate-400'}`}>
                {todo.label}
            </div>
        </li>
    )
}

export default TodoItem;