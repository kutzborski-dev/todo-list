import { Select, SelectItem } from "@nextui-org/react";
import statuses from "data/statuses.json";

function TodoTaskStatusSelect({id, name = ''}: {id: string, name: string}) {
    return (
        <Select
            radius="none"
            label="Status"
            name={name}
            className="max-w-xs"
            classNames={{
                popoverContent: "bg-foreground",
                trigger: "!bg-transparent !shadow-none border-b border-accent",
                label: "text-lg"
            }}
          >
            {statuses.map((status, i) => (
              <SelectItem key={status.key} value={status.key}>
                {status.label}
              </SelectItem>
            ))}
          </Select>
    )
}

export default TodoTaskStatusSelect;