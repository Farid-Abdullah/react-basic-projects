import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
const HiddenSearchBar = () => {

    const [showInput, setShowInput] = useState(false)
    const [bgColor, setBgColor] = useState("")
    const [txtColor, setTxtColor] = useState("")
    

    const handleClick = (e) => {
        
      

      if(e.target.className === 'h-container'){
        setShowInput(false)
        setBgColor('white')
        setTxtColor("black")
      }

      
      
      
  
    }

  return (
    <div className='h-container' style={{background:bgColor, color: txtColor}} onClick={handleClick}>
            {showInput? (<div><p>search or press any black area</p><input type ='text' placeholder='Search' /></div>): (<div><p>press the icon:</p><FaSearch onClick={()=> {setShowInput(true);setTxtColor("white");setBgColor('black')}} /></div>)}
    </div>
  )
}
export default HiddenSearchBar