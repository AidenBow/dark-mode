import {useEffect} from "react"
import useLocalStorage from "./useLocalStorage"

export const useDarkMode = () => {
    const [darkValue, setDarkValue] = useLocalStorage(false)

    useEffect(() => {
        const body = document.querySelector('body');
        darkValue ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [darkValue])

    return [darkValue, setDarkValue]
}

export default useDarkMode