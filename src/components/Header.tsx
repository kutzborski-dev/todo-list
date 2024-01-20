import SettingsIcon from '@mui/icons-material/Settings';

function Header() {
    return (
        <header className="py-5 px-6 bg-white dark:bg-slate-700/50 shadow-md shadow-slate-800/5 dark:shadow-none relative">
            <h1 className="text-center uppercase font-bold text-slate-700 text-lg flex-1">Todo List App</h1>
            <button className="absolute top-0 bottom-0 my-auto right-6 h-6 w-6 leading-none rotate-0 transition-transform duration-300 hover:rotate-180">
                <SettingsIcon fontSize="medium" className="text-slate-700" />
            </button>
        </header>
    );
}

export default Header;