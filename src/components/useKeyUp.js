import {useEffect} from 'react'

export const useKeyUp = (fn) => {

    useEffect(() => {
        window.addEventListener("keyup", fn)
        return () => window.removeEventListener("keyup", fn)
    }, [fn])

}