import { DoneAll as DoneAllIcon } from "@mui/icons-material";
import colors from 'tailwindcss/colors';
import { Button } from "@mui/material";
import TodoListType from "../types/TodoListType";
import { useThemeContext } from "context/themeContext";

function TodoTab({list}: {list: TodoListType}) {
    const { theme } = useThemeContext();
    const listItemsCompleteCount = list.data.filter(todo => todo.status === 'complete').length;

    return (
        <Button href={`/list/${list.id}`} style={{
            color: theme === 'dark' ? colors.slate[300] : colors.slate[600],
            textTransform: 'inherit'
        }}>
            <div className="mr-2">
                <DoneAllIcon fontSize="small" className={list.status === 'complete' ? 'text-lime-500 dark:text-green-400' : 'text-slate-500'} />
            </div>
            <h1 className="text-xl leading-7">{list.name}</h1>
            <span className={`ml-1 ${list.status === 'complete' ? 'text-lime-500 dark:text-green-400' : 'text-slate-400 dark:text-slate-500'}`}>({listItemsCompleteCount}/{list.data.length} items done)</span>
        </Button>
    )
}

export default TodoTab;