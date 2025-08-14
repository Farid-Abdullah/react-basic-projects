import React, { useEffect, useState } from 'react'
import { words } from './words'
import { BiBox } from 'react-icons/bi'

const Wordle = () => {
    const arrBox = [1,2,3,4,5]
    const arrLine = [1,2,3,4,5,6]
    const [theWord,setTheWord] = useState('')
    const [guess,setGuess] = useState([
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
]);

    useEffect(()=>{
        if(theWord === ''){
        const randomword = words[Math.floor(Math.random()*words.length)];
        
        
        setTheWord(randomword.toLowerCase());}
    
    
    },[])

    const handleBoxInput = (e,indexline,index) => {
            const newVal = [...guess];
            newVal[indexline][index] = e.target.value;
        
            setGuess(newVal)
    }
    const checkWord =(indexline) =>{
        
        className = 'green'
        const theGuess = guess[indexline].join('');
        if(theGuess.length!==5){
            console.log("empty boxes")
            return;
        }
        if(theGuess === theWord){
            console.log('solved')
        } else {
            for(let i=0;i<theGuess.length;i++){
                if(theGuess[i]===theWord[i]){
                    console.log('letter matches')
                }
            }
        }
        
    }
   


  return (
   
    <div className='wordleMain'>
        <h1>World (guess the word)</h1>
       {arrLine.map((m,indexline)=>
       <div key={indexline} className="wordle-line">
        {arrBox.map((n,index)=> 
        <input value={guess[indexline][index]} key={index} className='wordle-box'  onChange={(e)=>handleBoxInput(e,indexline,index)} maxLength={1} />
        )} 
        <button onClick={()=>checkWord(indexline)}>Check</button>
        </div>)}
        <span>{theWord}</span>
    </div>
    
  )
}



export default Wordle