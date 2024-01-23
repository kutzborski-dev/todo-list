import CacheHelper from "helpers/CacheHelper";
import { useState, useEffect } from "react";
const Cache = CacheHelper;

// default = OS preference
type ThemeType = "light" | "dark";

function useTheme() {
    const defaultTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";
    const themeData: ThemeType = Cache.get<ThemeType>("theme") ?? defaultTheme;
    const [theme, setTheme] = useState<ThemeType>(themeData);

    if(theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    useEffect(() => {
        Cache.set("theme", theme);
    }, [theme]);

    return [theme, setTheme] as const;
}

export default useTheme;