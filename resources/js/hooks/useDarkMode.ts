import { render } from 'react-dom';
import { useState } from 'react';

export function useDarkMode(): [()=>void, boolean] {
    const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains("dark"))
    const toggle = ()=> {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
        else {
            document.documentElement.classList.add("dark")
            setIsDarkMode(true);
        }
    }

    return [toggle, isDarkMode]
}
