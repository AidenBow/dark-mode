import React, {useEffect} from "react"
import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
    const [darkValue, setDarkValue] = useLocalStorage('key')

    let body = document.getElementsByName("body")

    useEffect(() => {
        if (darkValue === true) {
            body.classList.add("dark-mode")
        } else {
            body.classList.remove("dark-mode")
        }
    }, [])

    return []
}

export default useDarkMode