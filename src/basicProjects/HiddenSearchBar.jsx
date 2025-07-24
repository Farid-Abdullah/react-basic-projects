import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
const HiddenSearchBar = () => {

    const [showInput, setShowInput] = useState(false)
    const [bgColor, setBgColor] = useState("white")
    const [txtColor, setTxtColor] = useState("black")

    const handleClick = (e) => {
        setBgColor("#1a1a1a")

        if(e.target.className === 'h-container'){
            setShowInput(false)
            setBgColor('white')
            setTxtColor("black")
        }
    }

  return (
    <div className='h-container' style={{background:bgColor, color: txtColor}} onClick={handleClick}>
            {showInput? (<div><p>search or press any black area</p><input type ='text' placeholder='Search' /></div>): (<div><p>press the icon:</p><FaSearch onClick={()=> {setShowInput(true);setTxtColor("white")}} /></div>)}
    </div>
  )
}
export default HiddenSearchBar