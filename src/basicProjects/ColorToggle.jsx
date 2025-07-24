import React, { useState } from 'react'

const ColorToggle = () => {
    const [bgColor, setBgColor] = useState('white');
    const [txtColor, setTxtColor] = useState("black");
    const [btnStyle, setBtnStyle] = useState("white")

    const handleClick = () => {
        setBgColor(bgColor === 'white' ? 'black':'white')
        setTxtColor(txtColor === 'black' ? 'white':'black')
        setBtnStyle(bgColor ==='white' ? 'black':'white')
    }

  return (
    <div className='toggleColorApp' style={{backgroundColor: bgColor, color:txtColor}}>
        <button 
        onClick={handleClick} 
        style={{
            background: btnStyle, 
            color:txtColor, 
            border:`2px solid ${txtColor}`
            }}>
            {bgColor === 'white'? 'Black Theme':'White Theme'}    
            </button>
            <div className="toggle-content">
                <h1>Hello world from ColorToggle.jsx <br />
                 change the color of this page</h1>
            </div>
    </div>
  )
}

export default ColorToggle