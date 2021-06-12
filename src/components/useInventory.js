import {useState} from 'react'

export const useInventory = (props) => {
    
    const [counts, setCounts] = useState({food0: 0, food1: 0, food2: 0, food3: 0})

    const add_item = (itemType) => {
        console.log('adding item!')
    }
    
    return [counts, setCounts, add_item]
}