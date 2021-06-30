import {useEffect} from 'react'

export const useKeyPress = (fn) => {

    useEffect(() => {
        window.addEventListener("keydown", fn)
        return () => {
            window.removeEventListener("keydown", fn)
        }
    }, [fn])

}