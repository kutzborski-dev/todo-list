import CacheHelper from "helpers/CacheHelper";
import { useState, useEffect } from "react";
const Cache = CacheHelper;

type StatusType = {
    name: string,
    key: string,
    color: string
}

function useStatuses() {
    const statusData: StatusType[] = Cache.get<StatusType[]>("statuses") ?? [];
    const [statuses, setStatuses] = useState<StatusType[]>(statusData);

    useEffect(() => {
        Cache.set("statuses", statuses);
    }, [statuses]);

    return [statuses, setStatuses] as const;
}

export default useStatuses;