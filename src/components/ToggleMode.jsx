import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import React, { useState, useEffect } from "react";

function ToggleMode() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (
            localStorage.getItem("theme") === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
            setTheme("light");
        }
    }, []);

    const toggleTheme = () => {
        if (theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setTheme("light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-cyan-600 text-gray-800 dark:text-gray-200 lg:px-2 py-2 md:px-[6px] md:py-[6px] sm:px-1 sm:py-1 rounded-full xs:p-[2px]"
        >
            {theme === "dark" ? (
                <IoMoon className="text-white lg:text-[30px] md:text-[30px] sm:text-[28px] xs:text-[25px] " />
            ) : (
                <IoSunny className="text-yellow-500 lg:text-[30px] md:text-[30px] sm:text-[28px] xs:text-[25px] " />
            )}
        </button>
    );
}

export default ToggleMode;
