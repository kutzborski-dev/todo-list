import {
    Settings as SettingsIcon,
    LightModeOutlined as LightModeOutlinedIcon,
    LightMode as LightModeIcon
 } from '@mui/icons-material';
import { useThemeContext } from 'context/themeContext';

function Header() {
    const { theme, setTheme } = useThemeContext();

    return (
        <header className="py-5 px-6 bg-white dark:bg-slate-700/50 shadow-md shadow-slate-800/5 dark:shadow-none relative">
            <h2 className="text-center uppercase font-bold text-slate-700 dark:text-slate-400 text-lg flex-1"><a href="/">Todo List App</a></h2>
            <div className="absolute top-0 bottom-0 right-6 my-auto h-6">
                <button className="mr-2" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    {
                        theme === 'dark' ?
                            <LightModeOutlinedIcon fontSize="medium" className="text-slate-700 dark:text-slate-400" />
                        :
                            <LightModeIcon fontSize="medium" className="text-slate-700 dark:text-slate-400" />
                    }
                </button>
                <a href="/settings" className="leading-none">
                    <SettingsIcon fontSize="medium" className="text-slate-700 dark:text-slate-400" />
                </a>
            </div>
        </header>
    );
}

export default Header;