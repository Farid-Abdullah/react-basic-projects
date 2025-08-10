import React, { useEffect, useRef, useState } from 'react'





const NumEdition = () => {
    const [numArray,setNumArray] = useState([]);

    // for the entire duration of the game:
    const [attemptStarted, setAttemptStarted] = useState(false);

    // only for showing the hint:
    const [showNums, setShowNums] = useState(false);
    const [countdown,setCountdown] = useState("memorize positions 6");

    //following state will decide whether user's clicks should start effecting score
    const [playStarted, setPlayStarted] = useState(false);

    //score and attempts:

    const [attempt,setAttempt] = useState('');
    

    const [score,setScore] = useState(0);

    const latestAttempt = useRef('');

    // for the buttons to get highlighted while playing
    const [clickBlockStyle,setClickBlockStyle] = useState({}) 
    // discarded but name still used: clickedBlockStyle will contain index as key and style as value e.g {0:'style...', 1:'style2...}
    // new way of using this state: {index:'correct'} or {index:'incorrect'} for every block,
    // then, if the block is correct render a style for it etc etc etc
    // **********************************************

    const answer = '123456789';

      useEffect(() => {
        latestAttempt.current = attempt;
    }, [attempt]); 

    const handleStart = () =>{
        setClickBlockStyle({})
        setScore(0)
        setAttempt('')
        setAttemptStarted(true);
       
        const forward = [1,2,3,4,5,6,7,8,9];

        // condition to randomize
        if(numArray.length>8){
            setNumArray([...randomizeNums(numArray)]);
        } else {
            setNumArray(randomizeNums(forward))
        }

        //CountDown and timer with one setInterval
        setShowNums(true)
        let count = 5;
        let prePhrase = 'memorize positions'
        let postPhrase = ''
        const intervalDown = setInterval(() => {
        
        if (count === 0 && prePhrase !== 'You got') {
            
            setShowNums(false); // hide numbers
            count = 15;
            prePhrase = 'You got' ;
            postPhrase = 'seconds';
            setPlayStarted(true)
             
        }
        setCountdown(`${prePhrase} ${count} ${postPhrase}`)
        if(count === 0 && prePhrase ==='You got' || latestAttempt.current.length===9){
            
            setCountdown('memorize positions 6')
            
            clearInterval(intervalDown); //stop countdown
            setAttemptStarted(false);
            setPlayStarted(false);
            setShowNums(true);
            
            let at = latestAttempt.current;
            setScore(showScore(at));
            
        
            
            
        }
       
        count--;
            }, 1000); 

    }

  /*following is a function used to randomize elements of an array,
it is better than using sort() or tosorted method with math.random()*/
    const randomizeNums = (array) =>{
        for(let i = array.length-1; i>=0; i--){
            const Random = Math.floor(Math.random()*i+1);
            [array[i],array[Random]] = [array[Random],array[i]];
        }
        return array;
    }

    const showScore = (atmpt) => {
        
        let S = 0;
        for(let a = 0; a<atmpt.length; a++){
            if(atmpt[a] === answer[a]){
                S++
            }
        }
        
        return S
    }
    
    const handleScore = (num,numIndex) =>{
        
        
        if(playStarted && attempt.length<9){
            
         
        const currentPos = attempt.length // this will serve as index for checking if numbers match each other
        let Choice = answer[currentPos] === num.toString() // whether the current number in the attempt is chosen correctly bla bla

        const theIndex = numArray.indexOf(num)
        if(Choice){ // if correctly chosen a block
               
            setClickBlockStyle({...clickBlockStyle, [theIndex]:'correct'})
         
        } else {
               
            setClickBlockStyle({...clickBlockStyle ,[theIndex]:'incorrect'})
        }
        setAttempt(attempt + num.toString())
            
       
            }
        }
    
    const getTheStyle = (numIndex) =>{
        if(!clickBlockStyle[numIndex]){
            return {}
        } else {
            if(clickBlockStyle[numIndex] === 'correct'){
                return {border:'5px solid green',backgroundColor:'lightgreen'}

            } else {
                return {border:'5px solid red',backgroundColor:'pink'}
            }
        }
    }
    
    const renderNumBlocks = (num,numIndex) => {
        let displayWhat = '?'
        if(showNums){
            displayWhat = num
        } else if (clickBlockStyle[numIndex]){
            displayWhat = num
        }
        return <span key={numIndex} className='rand-num' 
        onClick={()=>handleScore(num,numIndex)}
        style={getTheStyle(numIndex)}
        >{displayWhat}</span>
    }

  return (
    <div>
        <h2 style={{textAlign:'center'}}>Memory game</h2>
    <div className='main-div'>
        
    
        <div className='countdown side-div'>
         {attemptStarted ? <h2> <br/> {countdown}</h2>:<h2 className='strt-btn' onClick={handleStart}><br/>Start</h2>}
        </div>
        
       
        <div className='num-container'>{numArray.map((num,numIndex)=>renderNumBlocks(num,numIndex))}</div>
        
        <div className='score side-div'>
        {!attemptStarted? <h1>{score}<br/>SCORE</h1>:<h1></h1>}
        </div>
    </div>
    </div>
  )
}

export default NumEdition