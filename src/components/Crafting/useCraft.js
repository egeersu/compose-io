import {useState } from 'react'
import {input_size, rules} from '../../config'

export const useCraft = (inventory, experimentId, sessionId, group, day, wso, saveData) => {

    const [inputList, setinputList] = useState([])
    const [outputList, setoutputList] = useState([])
    const [success, setSuccess] = useState('null')
    const [itemHovered, setitemHovered] = useState(null)


    const ruleset = rules[group]

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
    
    const craft = (e) => {
        check_uncollected()
        var rule_found = false
        ruleset.forEach((rule)=>{
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
            setoutputList(inputList)
            setinputList([])
            setSuccess('fail')
        }
        
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds()
     
        let message = {
            experimentId: experimentId,
            sessionId: sessionId,
            table: 'craft',
            "timestamp": Date.now(),
            date: datetime,
            group: group,
            day: day,
            attempt: inputList.join(),
            success: rule_found ? 1 : 0,
        }

        if (inputList.length !== 0 & saveData) {
            wso.sendChunk(message)
        }
        
        
        var clear_fail_alert = setInterval(function(){ 
            setSuccess('null') 
            clearInterval(clear_fail_alert)
        }, 4000);



    }

    return [inputList, outputList, success, addItem, removeItem, collectItem, craft, itemHovered, setitemHovered]
}