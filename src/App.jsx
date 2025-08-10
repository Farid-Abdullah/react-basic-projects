import React, { useState } from 'react'
import Counter from './basicProjects/counter'
import Todo from './basicProjects/todo'
import Meals from './basicProjects/meals'
import Calculator from './basicProjects/Calculator'
import ColorToggle from './basicProjects/ColorToggle'
import HiddenSearchBar from './basicProjects/HiddenSearchBar'
import Testimonials from './basicProjects/Testimonials'

import './app.css'

import Accordian from './basicProjects/Accordian.jsx'
import Form from './basicProjects/form.jsx'
import NumEdition from './basicProjects/MemoryGame/NumEdition.jsx'

const App = () => {

    const [activeProject,setActiveProject] = useState(null)




  return (
    <div>
      <div className='navigator-div'>
      <div className="project-button" onClick={() => setActiveProject(<Counter />)}>Counter</div>
      <div className="project-button" onClick={() => setActiveProject(<Todo />)}>Todo</div>
      <div className="project-button" onClick={() => setActiveProject(<Accordian />)}>Accordion</div>
      <div className="project-button" onClick={() => setActiveProject(<Calculator />)}>calculator</div>
      <div className="project-button" onClick={() => setActiveProject(<HiddenSearchBar />)}>hiddenSearchBar</div>
      <div className="project-button" onClick={() => setActiveProject(<Form />)}>Form</div>
      <div className="project-button" onClick={() => setActiveProject(<Meals />)}>Meals(grid)</div>
      <div className="project-button" onClick={() => setActiveProject(<Testimonials />)}>Testimonials</div>
      <div className="project-button" onClick={() => setActiveProject(<NumEdition />)}>Game</div>
      <div className="project-button" onClick={() => setActiveProject(<ColorToggle />)}>ColorToggle</div>
      </div>
      
      
     {activeProject}
      
     

     
     
      
    </div>
    
    
    
  )
}

export default App