import { Input as NextUIInput } from "@nextui-org/react";

type InputProps = {
    id?: string;
    type?: string;
    radius?: string;
    label: string;
    name?: string;
    className?: string;
    classNames?: {} | {[key: string]: string},
    defaultValue?: string
}

export default function Input({id = '', type = 'text', label, name = '', className = '', classNames = {}, defaultValue = ''}: InputProps) {
    classNames = {
        ...{
            inputWrapper: "!bg-transparent !shadow-none border-b-1 border-accent",
            label: "text-lg"
        }
    };

    return (
        <NextUIInput
            id={id ?? ''}
            radius="none"
            type={type ?? 'text'}
            label={label}
            name={name ?? ''}
            className={className ?? ''}
            classNames={classNames}
            defaultValue={defaultValue}
        />
    )
}