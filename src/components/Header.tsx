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
            <div className="flex justify-center">
                <a href="/" id="app-title"><img className="w-24 flex-0" src={`/assets/images/todo-logo-${theme}.png`} alt="App logo" /></a>
            </div>
            <div className="absolute top-0 bottom-0 right-6 my-auto h-6">
                <button className="mr-6" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
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