import React from 'react'
import Counter from './basicProjects/counter'
import Todo from './basicProjects/todo'
import Meals from './basicProjects/meals'
import Calculator from './basicProjects/Calculator'
import ColorToggle from './basicProjects/ColorToggle'
import HiddenSearchBar from './basicProjects/HiddenSearchBar'
import Testimonials from './basicProjects/Testimonials'

import {accrodianData} from './content/QnA.js'
import Accordian from './basicProjects/Accordian.jsx'
import Form from './basicProjects/form.jsx'
import NumEdition from './basicProjects/MemoryGame/NumEdition.jsx'

const App = () => {
  
  return (
    <div>
      
      <NumEdition />
 
     {/* <div className="accordian-container">
      {accrodianData.map(({title,desc,id})=> (
        <Accordian title = {title} desc = {desc} Qid = {id} />
      ))}
     </div> */}
     
      
    </div>
    
    
    
  )
}

export default App