import { TextField } from "@mui/material";
import { useThemeContext } from "context/themeContext"
import colors from "tailwindcss/colors"

export default function TextInput({id = null, label, fontSize = null, name = null}: {id?: null | string, label: string, fontSize?: null | string, name?: null | string}) {
    const { theme } = useThemeContext();
    id ??= label.replace(/ /g, "").toLowerCase();
    name ??= id;
    fontSize ??= '!text-lg';

    return (
        <TextField id={id} name={name} label={label} variant="standard" inputProps={{
            className: `!text-slate-600 dark:!text-slate-300 ${fontSize}`
        }} InputLabelProps={{
            className: fontSize
        }} sx={{
            '& .MuiInputLabel-formControl': {
                color: theme === 'dark' ? colors.slate[300] : colors.slate[600]
            },
            '& .MuiInputLabel-shrink': {
                fontSize: "1.2rem !important"
            },
            '& .MuiFormLabel-filled:not(.Mui-focus)': {
                color: theme === 'dark' ? colors.slate[400] : colors.slate[600]
            },
            '& .MuiInput-root:before': {
                borderColor: theme === 'dark' ? colors.slate[600] : colors.slate[300]
            },
            '& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
                borderColor: theme === 'dark' ? colors.slate[500] : colors.slate[300]
            },
            '& .MuiInput-root:after': {
                borderColor: theme === 'dark' ? colors.violet[500] : colors.sky[600]
            },
            '& .Mui-focused': {
                color: theme === 'dark' ? colors.violet[500] : colors.sky[600]
            },
        }} />
    )
}