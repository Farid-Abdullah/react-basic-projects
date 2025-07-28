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

      useEffect(() => {
        latestAttempt.current = attempt;
    }, [attempt]); 

    const handleStart = () =>{
        
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
        let answer = '123456789';
        let S = 0;
        console.log(atmpt,'from show score')
        for(let a = 0; a<atmpt.length; a++){
            if(atmpt[a] === answer[a]){
                S++
            }
        }
        
        return S
    }
    
    const handleScore = (num) =>{
        
        if(playStarted && attempt.length<9){
            setAttempt(attempt + num.toString())
            console.log(attempt,'from handlescore')
        } 
       
            }
        
    

  return (
    <div className='num-edition'>
        <div className="game-message">
        <h1>Test your memory with this game</h1>
        <p>numbers from 1 to 9 will appear in the following boxes for 4 seconds. Memorize the positions, and then click the boxes in order from 1 to 9</p>
        <button onClick={handleStart}>{!attemptStarted ? `Start`: ``}</button>
         {attemptStarted ? <h2>{countdown}</h2>:<h2></h2>}
        {attempt? <h1>Attempt:{attempt}</h1>: ``}
        </div>
       
        <div className='num-container'>
        <span onClick={() => handleScore(numArray[2])} className='rand-num'>{showNums ? <p>{numArray[2]}</p>:<p>?</p>}</span>
        <span onClick={() => handleScore(numArray[3])} className='rand-num'>{showNums ? <p>{numArray[3]}</p>:<p>?</p>}</span>
        <span onClick={() => handleScore(numArray[1])} className='rand-num'>{showNums ? <p>{numArray[1]}</p>:<p>?</p>}</span>
        <span onClick={() => handleScore(numArray[6])} className='rand-num'>{showNums ? <p>{numArray[6]}</p>:<p>?</p>}</span>
        <span onClick={() => handleScore(numArray[8])} className='rand-num'>{showNums ? <p>{numArray[8]}</p>:<p>?</p>}</span>
        <span onClick={() => handleScore(numArray[0])} className='rand-num'>{showNums ? <p>{numArray[0]}</p>:<p>?</p>}</span>
        <span onClick={() => handleScore(numArray[5])} className='rand-num'>{showNums ? <p>{numArray[5]}</p>:<p>?</p>}</span>
        <span onClick={() => handleScore(numArray[7])} className='rand-num'>{showNums ? <p>{numArray[7]}</p>:<p>?</p>}</span>
        <span onClick={() => handleScore(numArray[4])} className='rand-num'>{showNums ? <p>{numArray[4]}</p>:<p>?</p>}</span>
        </div>
        
        {!attemptStarted? <h1>Your score: {score}</h1>:<h1></h1>}
        
    </div>
  )
}

export default NumEdition