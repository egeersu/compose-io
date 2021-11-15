import './App.css';
import axios from 'axios'
import Game from './components/Game'
import {useState, useEffect} from 'react'
import { ChunksIncremental } from './ChunksIncremental';
import('./ChunksIncremental.js')


function App() {
  const AIRTABLE_API_KEY=process.env.REACT_APP_API_KEY
  const airtable_base = 'appWGnhKcDCqpBUzM'

  const experimentId = 'eersu_game/0.1.0'

  // 20-digit alphanumeric Id for the participant
  const sessionId = Math.random().toString(36).substr(2, 10) + Math.random().toString(36).substr(2, 10)

  const [group, setgroup] = useState(0)
  const [fetched, setfetched] = useState(false)

  const [ip, setIP] = useState('');

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }


  // var wso = new ChunksIncremental(
  //   "wss://somata.inf.ed.ac.uk/chunks/ws", 
  //   (chunksLeft,errStatus,m) => {console.log("Received message: " + m);}, 
  //   (e) => {console.log("Encountered error: " + e)})

  var wso = 10

  useEffect(()=>{
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(airtable_base);    
    var target = -1

    getData()

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
      <Game experimentId={experimentId} sessionId={sessionId} group={group} airtable_base={airtable_base} wso={wso}/>
    </>
  );
}

export default App;
