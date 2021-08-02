import './App.css';
import Game from './components/Game'
import { experiments } from './config';
import {useState, useEffect} from 'react'

function App() {

  const AIRTABLE_API_KEY=process.env.REACT_APP_API_KEY
  const AIRTABLE_BASE_ID=process.env.REACT_APP_BASE_ID

  const [experimentID, setexperimentID] = useState(Math.floor(Math.random() * 1e6))

  const [group, setgroup] = useState(0)
  const [fetched, setfetched] = useState(false)

  useEffect(()=>{
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_ID);    
    var group1 = 0
    var group2 = 0

    base('experimentTracker').select({
        view: 'Grid view'
    }).firstPage(function(err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function(record) {
            group1 = record.get('Group1');
            group2 = record.get('Group2');
        });
        if (group2 >= group1) {setgroup(1)}
        else {setgroup(2)}
        if (group === 1 || group === 2) {setfetched(true)}
      })
  
  }, [fetched])
  

  return (
    <>
      <Game experimentID={experimentID} group={group}/>
    </>
  );
}

export default App;
