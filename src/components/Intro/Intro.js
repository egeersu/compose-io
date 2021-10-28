import React, {useState, useEffect} from 'react'

import './Intro.css';

import useSound from 'use-sound'
import env_sound from '../../assets/sound/env.wav'


const Intro = (props) => {

    const [h, seth] = useState(window.innerHeight) 
    const [w, setw] = useState(window.innerWidth)

    const [stage, setStage] = useState(0)

    useEffect(() => {
        const handle_resize = (e) => {
            console.log('resized to: ', window.innerWidth, ', ', window.innerHeight)
            setw(window.innerWidth)  
            seth(window.innerHeight)
        }
        window.addEventListener('resize', handle_resize)
    }, [window.innerWidth, window.innerHeight])

    const style1 = {
        height: h,
        width: w
    }

    const [play] = useSound(env_sound)

    const page0 = () => {
        return (
            <>
                <div className='project-information'>
                    <h1 className='consent-title'>Participant Information Sheet</h1>
                    <p className='consent-text2'><strong>Project Title: </strong> Compositional Games</p>
                    <p className='consent-text2'><strong>Principal Investigator: </strong> Chris G. Lucas</p>
                    <p className='consent-text2'><strong>Principal Investigator Contact Details: </strong> <a href='c.lucas@ed.ac.uk'>c.lucas@ed.ac.uk</a></p>
                    <p className='consent-text2'><strong>Researcher: </strong>Ege Ersü</p>

                    <p className='consent-text2'><strong>Who are the researchers?</strong></p>
                    <p className='consent-text2'><strong>Christopher G. Lucas</strong> (Chancellor's Fellow/Lecturer in the School of Informatics at the University of Edinburgh.)</p>
                    <p className='consent-text2'><strong>Simon Valentin</strong> (PhD student in the School of Informatics at the University of Edinburgh.)</p>
                    <p className='consent-text2'><strong>Ege Ersü</strong>(MSc student in the School of Informatics at the University of Edinburgh.)</p>
                    <p className='consent-text2'></p>

                    <p className='consent-text2'><strong>What is the purpose of the study?</strong></p>
                    <p className='consent-text2'> The research goal is to study human learning and decision-making related to collecting, crafting and using sets of items. </p>

                    <p className='consent-text2'><strong>Why have I been asked to take part?</strong></p>
                    <p className='consent-text2'>If you decide to take part, your crafting data will help us test our hypotheses.</p>

                    <p className='consent-text2'><strong> Do I have to take part?</strong></p>
                    <p className='consent-text2'>No – participation in this study is entirely up to you. You can withdraw from the study at any time without giving a reason, up until you click the craft button. After this point, personal data will be deleted and anonymised data will be combined such that it is impossible to remove individual information from the analysis. Your rights will not be affected. If you wish to withdraw, contact the PI.</p>
               
                    <p className='consent-text2'><strong>What will happen if I decide to take part?</strong></p>
                    <p className='consent-text2'>You will be playing a survival-themed browser game. Your item crafting attempts will be recorded to a database. The game should not take longer than 15 minutes.  </p>

                    <p className='consent-text2'><strong>Are there any risks associated with taking part?</strong></p>
                    <p className='consent-text2'>There are no significant risks associated with participation.</p>
                    
                    <p className='consent-text2'><strong>Are there any benefits associated with taking part?</strong></p>
                    <p className='consent-text2'>There are no benefits associated with participation.</p>    
                </div>

                <div className='project-information2'>
                    <p className='consent-text2'><strong>What will happen to the results of this study?</strong></p>
                    <p className='consent-text2'>The results of this study may be summarised in published articles, reports and presentations. Quotes or key findings will be anonymized: We will remove any information that could, in our assessment, allow anyone to identify you. With your consent, information can also be used for future research. Your identifiable data may be archived for a maximum of 4 years. All potentially identifiable data will be deleted within this timeframe if it has not already been deleted as part of anonymization. </p>

                    <p className='consent-text2'><strong>Data protection and confidentiality.</strong></p>
                    <p className='consent-text2'>Your data will be processed in accordance with Data Protection Law.  All information collected about you will be kept strictly confidential. Your data will be referred to by a unique participant number rather than by name. </p>
                    <p className='consent-text2'>All electronic data will be stored on a password-protected encrypted computer, on the School of Informatics’ secure file servers, or on the University’s secure encrypted cloud storage services (DataShare, ownCloud, or Sharepoint) and all paper records will be stored in a locked filing cabinet in the PI’s office. Your consent information will be kept separately from your responses in order to minimise risk. </p>
                    
                    <p className='consent-text2'><strong>What are my data protection rights?</strong></p>
                    <p className='consent-text2'>The University of Edinburgh is a Data Controller for the information you provide. You have the right to access information held about you. Your right of access can be exercised in accordance Data Protection Law. You also have other rights including rights of correction, erasure and objection. For more details, including the right to lodge a complaint with the Information Commissioner’s Office, please visit www.ico.org.uk. Questions, comments and requests about your personal data can also be sent to the University Data Protection Officer at dpo@ed.ac.uk. </p>

                    <p className='consent-text2'><strong>Who can I contact?</strong></p>
                    <p className='consent-text2'>If you have any further questions about the study, please contact the lead researcher, Ege Ersü at <a>s2124950@ed.ac.uk</a>. If you wish to make a complaint about the study, please contact <a>inf-ethics@inf.ed.ac.uk</a>. When you contact us, please provide the study title and detail the nature of your complaint.</p>

                    <p className='consent-text2'><strong>Updated information.</strong></p>
                    <p className='consent-text2'>If the research project changes in any way, an updated Participant Information Sheet will be made available on <a href='http://web.inf.ed.ac.uk/infweb/research/study-updates'>http://web.inf.ed.ac.uk/infweb/research/study-updates</a>.</p>

                    <p className='consent-text2'><strong>Alternative Formats</strong></p>
                    <p className='consent-text2'>To request this document in an alternative format, such as large print or on coloured paper, please contact Ege Ersü at <a>s2124950@ed.ac.uk</a></p>

                    <p className='consent-text2'><strong>General Information</strong></p>
                    <p className='consent-text2'>For general information about how we use your data, go to: <a href='https://www.ed.ac.uk/data-protection/privacy-notice-research'>edin.ac/privacy-research</a></p>
                </div>
            </>
        )
    }

    const page1 = () => {
        return (
            <>
                <div className='consent-form'>
                    <h1 className='consent-title'>Consent Form</h1>
                    <p className='consent-text3'> By clicking the START button you agree that:</p>
                    <p className='consent-text3'> (1) I have read and understood the Participant Information Sheet for this study, that I have had the opportunity to ask questions to the Principal Investigator via email, and that any questions I had were answered to my satisfaction.</p>
                    <p className='consent-text3'> (2) My participation is voluntary, and that I can withdraw at any time without giving a reason. Withdrawing will not affect any of my rights. </p>
                    <p className='consent-text3'> (3) I consent to my anonymised data being used in academic publications and presentations.  </p>
                    <p className='consent-text3'> (4) I am 18 years of age or older. </p>
                    <p className='consent-text3'> (5) I understand that my anonymised data will be stored for the duration outlined in the Participant Information Sheet. </p>
                    <p className='consent-text3'> (6) I allow my data to be used in future ethically approved research.</p>

                    <p className='consent-text3'> Title of Study: Studying Compositional Generalization in Virtual Environments </p>
                    <p className='consent-text3'> The experiment should take no longer than 10 minutes. </p>                
                    <p className='consent-text3'> We recommend using Google Chrome or Safari for a smooth experience.</p>     
                    <p className='consent-text3'> Experimental Group: {props.group}</p>                           
                </div>
            </>
        )
    }

    var Airtable = require('airtable');
    const AIRTABLE_API_KEY=process.env.REACT_APP_API_KEY
    var base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(props.base_ids[0]);   

    const getGroupCounts = () => {
        return new Promise((resolve, reject)=> {
          base('experiment').select({
            view: 'Grid view'
           }).firstPage(function(err, records) {
             if (err) { console.error(err); return; }
             records.forEach(function(record) {
               const group1_airtable = record.get('Group1');
               const group2_airtable = record.get('Group2');
               const group3_airtable = record.get('Group3');
               const group4_airtable = record.get('Group4');
               const target = record.get('Target');
               resolve([group1_airtable, group2_airtable, group3_airtable, group4_airtable, target])
            });
          })
        })
      }
  
      const writeGroupCounts = (groupCounts) => {
  
        return new Promise((resolve, reject)=>{
          const group1_airtable = groupCounts[0]
          const group2_airtable = groupCounts[1]
          const group3_airtable = groupCounts[2]
          const group4_airtable = groupCounts[3]
          const target = groupCounts[4]
  
          base('experiment').update([
              {
                "id": "rec4HXVuTznpyvNRG",
                "fields": {
                  "Group1": props.group === 1 ? group1_airtable + 1 : group1_airtable,
                  "Group2": props.group === 2 ? group2_airtable + 1 : group2_airtable,
                  "Group3": props.group === 3 ? group3_airtable + 1 : group3_airtable,
                  "Group4": props.group === 4 ? group4_airtable + 1 : group4_airtable,
                  "Target": (target + 1) % 4
                }
              }
            ], function(err, records) {
              if (err) {
                console.error(err);
                return;
              }
              records.forEach(function(record) {
                console.log(record.get('Group1'));
                console.log(record.get('Group2'));
                console.log(record.get('Group3'));
                console.log(record.get('Group4'));
              });
            })
            resolve('done! hehe')  
        })
      }

    return (
        
        <div className='intro-screen' style={style1}>
            
            <div className='title-compose'>
                <div className='zombies-icon'></div>
                <h1 className='title'>COMPOSE.IO</h1>
                <div className='player-icon'></div>
            </div>

            <div className='text-blocks'>
                {stage === 0 ? page0() : null}
                {stage === 1 ? page1() : null}
            </div>
                        
            <div className='div-button2'>
                {stage === 0 ? <button className='starter-button' onClick={()=>{setStage(1); play()}}>NEXT</button> : null}
                {stage === 1 ? <button className='starter-button' onClick={()=>{props.nextPhase(); getGroupCounts().then(res2 => {writeGroupCounts(res2)})}}>I CONSENT</button> : null}                
            </div>

        </div>
    )
}

export default Intro
