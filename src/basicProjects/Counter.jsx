import React, { useState } from 'react'
import { useEffect } from 'react';
const Counter = () => {
    const [count,setCount] = useState(0);

    useEffect(()=> 
    {document.title = "Counter with useState"}
    ,[])

    

  return (
    <div id='counter-app'>Simple counter with useState hook
    <div  style={{display:"flex", margin:"auto"}}>
        <button onClick={()=>setCount(count-1)}><strong>-</strong></button>
        <h1>{count}</h1>
        <button onClick={() =>setCount(count+1)}><strong>+</strong></button>
    </div>
    </div>
  )
}

export default Counter