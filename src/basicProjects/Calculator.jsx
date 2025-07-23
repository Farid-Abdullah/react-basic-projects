import React from 'react'
import { useState } from 'react'
const Calculator = () => {
    const [inputVal, setInputVal] = useState('')
    const clear = () => setInputVal('');

    const display = (value) => setInputVal(inputVal + value)

    const calculate = () => setInputVal(eval(inputVal))
    
  return (
    <div id='calculator'>
        <input type="text" id='calc-input' value={inputVal}  readOnly/>
        <div className='buttons-container'>
        <button  className='num clear' onClick={()=> clear()}>C</button > 
        <button className='num operation' onClick={() => display('/')}>/</button >
        <button className='num operation' onClick={() => display('*')}>*</button >
        <button className='num' onClick={() => display('7')}>7</button >
        <button className='num' onClick={() => display('8')}>8</button >
        <button className='num' onClick={() => display('9')}>9</button >
        <button className='num operation' onClick={() => display('-')}>-</button >
        <button className='num' onClick={() => display('4')}>4</button >
        <button className='num' onClick={() => display('5')}>5</button >
        <button className='num' onClick={() => display('6')}>6</button >
        <button className='num operation plus' onClick={() => display('+')}>+</button >

        <button className='num' onClick={() => display('1')}>1</button >
        <button className='num' onClick={() => display('2')}>2</button >
        <button className='num' onClick={() => display('3')}>3</button >
        <button className='num' onClick={() => display('.')}>.</button >
        <button className='num' onClick={() => display('0')}>0</button >
        <button className='num equal operation' onClick={() => calculate()}>=</button >
        
        </div>
    

    </div>
  )
}

export default Calculator