import {useState, useEffect} from 'react'
import {input_size, output_size, images, rules} from '../../config'

export const useCraft = (inventory) => {

    const [inputList, setinputList] = useState([])
    const [outputList, setoutputList] = useState([])
    const [success, setSuccess] = useState('null')

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

    const collectItem = (e) => {
        const box_number = e.target.id[3]
        if (box_number < outputList.length) {
            // put it back to inventory        
            const collecting_item = outputList[box_number]
            inventory[collecting_item] += 1

            // update output list
            var outputList_copy = [...outputList]
            outputList_copy.splice(box_number, 1)
            setoutputList(outputList_copy)
            if (outputList.length === 1){setSuccess('null')}
        }
    }

    const check_uncollected = () => {
        if (outputList.length > 0) {
            outputList.map((item) => inventory[item] += 1)
            setoutputList([])
        }
    }

    const submitCourse = async (e) => {
        if (e) {e.preventDefault()}
        try {
            await fetch('/api/crafting_export', {
                method: 'POST',
                body: JSON.stringify({
                    inputList,
                    outputList,
                    success,
                }),
            });
        } catch (err) {
            console.log('oh no!')
            console.error(err);
        }
    };

    const craft = (e) => {
        check_uncollected()
        var rule_found = false
        rules.forEach((rule)=>{
            const rule_inputs = rule[0]
            if (inputList.toString() === rule_inputs.toString()) {
                const rule_outputs = rule[1]
                rule_found = true               
                setoutputList(rule_outputs)
                setinputList([])
                setSuccess('success')
            }
        })
        if (!rule_found) {
            setoutputList([])
            setinputList([])
            setSuccess('fail')
            var clear_fail_alert = setInterval(function(){ 
                setSuccess('null') 
                clearInterval(clear_fail_alert)
            }, 4000);
            // TODO: Fail animation
        }
        submitCourse()
    }

    return [inputList, outputList, success, addItem, removeItem, collectItem, craft]
}