import { createContext, useState, useEffect, useContext } from "react";
import CacheHelper from "helpers/CacheHelper";
const Cache = CacheHelper;

type Theme = "light" | "dark";

type ThemeContextProps = {
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

type ThemeContextProviderProps = {
    children: React.ReactNode
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function ThemeContextProvider({children}: ThemeContextProviderProps) {
    const defaultTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";
    const themeData: Theme = Cache.get<Theme>("theme") ?? defaultTheme;
    const [theme, setTheme] = useState<Theme>(themeData);

    if(theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    useEffect(() => {
        Cache.set<Theme>("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if(!context) throw new Error("useThemeContext can only be accessed within a ThemeContextProvider");
    return context;
}