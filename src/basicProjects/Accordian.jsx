import React, { useState } from 'react'
import {accrodianData} from '../content/QnA.js'

const SingleAccordian = ({title, desc, Qid}) => {
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



export const Accordian = () => {
  return (
    <div className="accordian-container">
      {accrodianData.map(({title,desc,id})=> (
        <SingleAccordian title = {title} desc = {desc} Qid = {id} />
      ))}
     </div>
  )
}


export default Accordian