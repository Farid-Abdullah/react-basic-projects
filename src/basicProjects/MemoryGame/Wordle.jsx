import React, { useEffect, useState } from 'react'
import { words } from './words'

const Wordle = () => {

  //ending game once finished:
  const [gameHasEnded,setGameHasEnded] = useState(false)
    


    // used for renderring boxes:
     const [boxItems,setBoxItems] = useState([['','','','',''],
                                        ['','','','',''],
                                        ['','','','',''],
                                        ['','','','',''],
                                        ['','','','',''],
                                        ['','','','',''],])
    // using a state to dynamically give classNames to boxes based on its attempt
    const [boxStyle,setBoxStyle] = useState([['','','','',''],
                                        ['','','','',''],
                                        ['','','','',''],
                                        ['','','','',''],
                                        ['','','','',''],
                                        ['','','','',''],])

    // this will be the word the user have to guess
    const [theWord,setTheWord] = useState();
    useEffect(()=>{
        //choosing a word from the collection
        const random_word = words[Math.floor(Math.random()*words.length)];
        setTheWord(random_word);
    },[])


    // keyboard pressing eventlistener: will do a lot of things
    useEffect(()=>{
        function handleKeydown(event){

            // identifying where the change will happen in the boxes:
            let lineIndex
            for(let i =0;i<boxItems.length;i++){// identifying the line index of where the box needs to change
                if(boxItems[i].includes('')){
                     lineIndex = i;
                    break;
                }
            }
            let boxIndex
            for(let j = 0;j<5;j++){ // identifying the first empty box in the line
                if(boxItems[lineIndex][j]===''){
                     boxIndex = j;
                    break;
                }
            }
            
         
            const key = event.key.toUpperCase();
            let newBoxItems = [...boxItems]
            if(key==='ENTER'){
                console.log('Enter was entered')
                handleEnter(lineIndex)
                return;
            } else if(key === 'BACKSPACE'){
                if(lineIndex>0 && boxStyle[lineIndex-1].includes('')){
                    newBoxItems[lineIndex-1][4]=''
                } else {
                    newBoxItems[lineIndex][boxIndex-1] = ''
                }
            } else if(/^[A-Z]$/.test(key)&&(lineIndex===0 || !boxStyle[lineIndex-1].includes(''))){ // regex to check if key is a capital letter
                newBoxItems[lineIndex][boxIndex] = key;
            }
            setBoxItems(newBoxItems)
        }
        function handleEnter(lineIndex){ //lineIndex defintely will contain ''
            if(lineIndex-1 === -1){ // if first line
                console.log('it is the first line and has empty space')
                return;
            } else if(boxItems[lineIndex].join('')!==''){ // if the line is not all empty, enter won't do anyting.
                console.log("the line has some spaces left")
                return;
            } else { // this the line that will check the result of attempt
                const guessedWord = boxItems[lineIndex-1].join('');
                if(guessedWord===theWord){

                    setGameHasEnded(true);
                    boxStyle[lineIndex-1] = ['correct-box','correct-box','correct-box','correct-box','correct-box']
                    setBoxStyle([...boxStyle])
                } else if (!words.includes(guessedWord)){
                    console.log('not a word')
                    return;
                } else {
                    for(let x=0;x<5;x++){
                        const theLetter = boxItems[lineIndex-1][x]
                        console.log(x)
                        if( theLetter === theWord[x]){
    
                            boxStyle[lineIndex-1][x] = 'correct-box';
                            
                        } else if(theWord.includes(theLetter)){
                            boxStyle[lineIndex-1][x] = 'correct-but-wrong-box';
                        } else{
                            boxStyle[lineIndex-1][x] = 'wrong-box';
                        }
                    }
                    setBoxStyle([...boxStyle]);
                }
                
            }
        }
        if(!gameHasEnded){
        window.addEventListener('keydown',handleKeydown)
        return () =>{ // called a return function, necessary to close the event listner to avoid potential problems
            window.removeEventListener('keydown',handleKeydown)
        }
}},[boxItems,boxStyle])

    


   // rendering the boxes using boxIndex state
    const theBoxes = (box,boxIndex,lineIndex) =>{
        
        return <span className={`box ${boxStyle[lineIndex][boxIndex]}`} key={boxIndex}>{box}</span>
    }

    // rendering the keys: 
    const theKeys = () =>{
        const key = 'Q'
        return <span>{key}</span>}


    const handleRestart =() =>{
        setBoxItems([['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],])
        setBoxStyle([['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],
                    ['','','','',''],])
    }
    
  return (
    
    <div>
    <div className="box-container">
        {boxItems.map(
            (line,lineIndex) =>
                <div className="box-line" key={lineIndex}>
                    
                    {line.map((box,boxIndex)=>theBoxes(box,boxIndex,lineIndex))}
                </div> 
        )}
    </div>

    <div className='restart-wordle' onClick={handleRestart}>restart</div>


    </div>
  )
}

export default Wordle



