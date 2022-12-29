import { useState } from "react"
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Navbar(props) {
    return (
        <header className="text-gray-600 body-font bg-slate-200 shadow-sm dark:bg-gray-900 dark:text-gray-300">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <div className="flex flex-wrap px-5 flex-col md:flex-row items-center space-x-4">
                    <a className="flex title-font font-medium items-center text-gray-900 dark:text-gray-50 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Vimaan</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900 dark:hover:text-gray-500">First Link</a>
                        <a className="mr-5 hover:text-gray-900 dark:hover:text-gray-500">Second Link</a>
                        <a className="mr-5 hover:text-gray-900 dark:hover:text-gray-500">Third Link</a>
                        <a className="mr-5 hover:text-gray-900 dark:hover:text-gray-500">Fourth Link</a>
                    </nav>
                </div>
                <DarkModeSwitch
                    checked={props.isDarkMode}
                    onChange={props.toggleDarkMode}
                    size={28}
                    className="ml-5"
                    sunColor="#111827"
                />
            </div>
        </header>
    )
}