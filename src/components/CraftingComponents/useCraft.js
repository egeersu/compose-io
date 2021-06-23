import {useState} from 'react'
import {input_size, output_size} from '../../config'

export const useCraft = () => {

    console.log('input_size: ', input_size)
    console.log('output_size: ', output_size)

    const [inputList, setinputList] = useState([])

    const [somethingReachable, setsomethingReachable] = useState(false)
    const [reachableItem, setreachableItem] = useState()

    return []
}