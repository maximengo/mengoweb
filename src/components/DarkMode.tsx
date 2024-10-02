import { useState, useEffect } from 'react';
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";

export default function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        setIsDarkMode(theme === 'dark');
    }, []);

    const onClickLight = () => {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setIsDarkMode(false);
    };

    const onClickDark = () => {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setIsDarkMode(true);
    };

    return (
        <div>
            <button
                type="button"
                data-tooltip-target="tooltip-darkmode"
                className="grid place-items-center py-2 w-8 h-8 md:w-10 md:h-10 rounded-lg text-slate-700 transition-colors bg-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                onClick={isDarkMode ? onClickLight : onClickDark}
            >
                {isDarkMode ? <Sun /> : <Moon />}
            </button>

            <div
                id="tooltip-darkmode"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-cyan-700"
            >
                {isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    );
}
