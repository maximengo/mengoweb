import { useState, useEffect } from 'react';
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";

export default function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (theme === 'dark' || (!theme && prefersDark)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <div className="relative group">
            <button
                type="button"
                aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all duration-300 hover:scale-110 active:scale-90 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 overflow-hidden shadow-sm"
                onClick={toggleTheme}
            >
                <div className={`transition-all duration-500 transform ${isDarkMode ? 'rotate-[360deg] scale-100' : 'rotate-0 scale-100'}`}>
                    {isDarkMode ? <Sun /> : <Moon />}
                </div>
            </button>
            
            {/* Tooltip helper */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 shadow-xl z-[70]">
                {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
            </span>
        </div>
    );
}

