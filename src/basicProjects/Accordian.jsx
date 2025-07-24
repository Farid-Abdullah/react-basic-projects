import React, { useState } from 'react'

const Accordian = ({title, desc, Qid}) => {
    const [isActive , setIsActive] = useState(false);

  return (
    <div className='singleAccordian' key={Qid}>
        <div className="accordian-header" onClick={()=> setIsActive(!isActive)}>
           <div className="title"> {title}</div>
           <p className='a-icon'>{isActive ? '-': '+'}</p>
        </div>
        <div className='desc'>{isActive ? <div>{desc}</div>: <span></span>}</div>
    </div>
  )
}

export default Accordian