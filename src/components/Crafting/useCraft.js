import {useState, useEffect} from 'react'
import {input_size, output_size, images, rules} from '../../config'

export const useCraft = (inventory) => {

    const [inputList, setinputList] = useState([])
    const [outputList, setoutputList] = useState([])

    const addItem = (item) => {
        if (inputList.length < input_size){
            if (inventory[item] > 0){
                setinputList([...inputList, item])
                inventory[item] -= 1
            }
            else {
                console.log('not enough items!')
            }    
        }        
        else {
            console.log('inputs full!')
        }
    }

    const removeItem = (e) => {
        const box_number = e.target.id[3]
        if (box_number < inputList.length) {
            // put it back to inventory        
            const removed_item_id = inputList[box_number]
            inventory[removed_item_id] += 1

            // update input list
            var inputList_copy = [...inputList]
            inputList_copy.splice(box_number, 1)
            setinputList(inputList_copy)
        }
    }

    const craft = (e) => {
        rules.forEach((rule)=>{
            const rule_inputs = rule[0]
            if (inputList.toString() === rule_inputs.toString()) {
                const rule_outputs = rule[1]               
                setoutputList(rule_outputs)
            }
        })
    }

    return [inputList, outputList, addItem, removeItem, craft]
}