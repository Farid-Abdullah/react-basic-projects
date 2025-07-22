import React, { useEffect, useState } from 'react'

const Todo = () => {

    useEffect(()=> {
    document.title = "TodoList"}
    ,[])

    const [todoInput, setTodoInput] = useState("");
    const [todoList,setTodoList] = useState([]);

    const handleAdd = () => {
        const newTodo = todoInput;
        if(newTodo ===""){
            alert("Empty todo, Try again");
            return 0;
        }
        
        
        setTodoInput("");
       
        setTodoList((todoList) => {
           return todoList.concat([{
                text:newTodo,
                id:Math.floor(Math.random()*100)
            }]);
        });
    }
        
    
const handleClosing = (Id) =>{
    setTodoList(todoList.filter((todo)=> todo.id !== Id ))

}
  
  return (
    <div id='todo-app'>
        
        <div id='input-field'>
        <input className='greys' value={todoInput} type="text" placeholder='New Todo' onChange={(e)=>setTodoInput(e.target.value)}/>
        <button className='todoButtons' onClick={handleAdd} >Add</button>
        </div>
        <br />
        <div>
    {
        todoList.map(({text,id})=> (
        <p className='todo greys' key={id}><span>{text}</span>
         <input value={"x"} className='todoButtons' type='button' onClick={()=>handleClosing(id)}/>
          </p>
    ))}
        </div>
        
    </div>
  )
}

export default Todo