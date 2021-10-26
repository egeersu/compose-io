import './App.css';
import Game from './components/Game'
import { experiments } from './config';
import {useState, useEffect} from 'react'

function App() {

  const AIRTABLE_API_KEY=process.env.REACT_APP_API_KEY
  const AIRTABLE_BASE_ID=process.env.REACT_APP_BASE_ID

  const base_experiment = 'appWGnhKcDCqpBUzM'
  const base1 = 'apphkOxoIQxDvZEh0'
  const base2 = 'app0kG9ca4YiX9gDG'
  const base3 = 'appYVcEB6FTlTh6MS'
  const base4 = 'appvTDwCiVFJkGaLU'

  const base_ids = {0:base_experiment, 1:base1, 2:base2, 3:base3, 4:base4}

  const [experimentID, setexperimentID] = useState(Math.floor(Math.random() * 1e6))

  const [group, setgroup] = useState(0)
  const [fetched, setfetched] = useState(false)

  useEffect(()=>{
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(base_experiment);    
    var target = -1

    base('experiment').select({
        view: 'Grid view'
    }).firstPage(function(err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function(record) {
            target = record.get('Target');
        });
        setgroup(target + 1)
        if (group === 1 || group === 2 || group === 3 || group === 4) {setfetched(true)}
      })  
  
  
  
  
  
    }, [fetched])
  

  return (
    <>
      <Game experimentID={experimentID} group={group} base_ids={base_ids}/>
    </>
  );
}

export default App;
