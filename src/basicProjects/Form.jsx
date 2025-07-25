import React, { useState } from 'react'

const Form = () => {
    //inputs:
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // input error:
    const [errorUsername, setErrorUsername] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    // input border colors (red for errors)
    const [usernameColor, setUsernameColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

    const validate = e => {
        e.preventDefault() // prevents the form from refreshing the page

        //username validation: 
        if(username.length > 5){ 
            setErrorUsername('');
            setUsernameColor('green');
        } else {
            setErrorUsername("Username must be at least 6 characters");
            setUsernameColor('red');
        }

        
        // email validation: used regex, email must include @ and atleast 3 characters before and after.
        const emailRegex = /^.{3,}@.{3,}$/ // {3,} means 3 or more /^ means start, /$ is end, . means any character.
            
        if(emailRegex.test(email)){
            setErrorEmail("");
            setEmailColor("green");
        } else {
            setErrorEmail("Incorrect email");
            setEmailColor("red");
            console.log("wrong email")
        }
        
        

        //password validation:
        /* to ensure complexity of password (i-e: 8 characters long, special charaters, upper and lower case)
         i could use regex */
        if(password.length > 7){
            setErrorPassword("");
            setPasswordColor("green")
        } else {
            setErrorPassword("Password must be atleast 8 characters long!")
            setPasswordColor("red")
            // empty the password field:
            setPassword("")
        }

        //confirm password validation:
        if(password.length<8){
            setConfirmPasswordColor('red')
        } else if(password === confirmPassword){
            setErrorConfirmPassword("");
            setConfirmPasswordColor("green")
            
        } else {
            setErrorConfirmPassword("Confirm password did not match password, try again")
            setConfirmPasswordColor("red")
            //emtpy the confirm password field:
            setConfirmPassword("")
        }

    }

  return (
    <div className='form-container'>
        <img className='form-image' src='/src/content/fire.jpg' alt="" />
        <form>
            <input type="text"  placeholder='Name' 
            style={{borderColor:usernameColor}} value={username}
            onChange={e => setUsername(e.target.value)}/>
            <p className="error">{errorUsername}</p>

            <input type="text"  placeholder='Email' 
            style={{borderColor:emailColor}} value={email}
            onChange={e => setEmail(e.target.value)}/>
            <p className="error">{errorEmail}</p>

            <input type="password"  placeholder='Password' 
            style={{borderColor:passwordColor}} value={password}
            onChange={e => setPassword(e.target.value)}/>
            <p className="error">{errorPassword}</p>

            <input type="password"  placeholder='Confirm Password' 
            style={{borderColor:confirmPasswordColor}} value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}/>
            <p className="error">{errorConfirmPassword}</p>
            
            <button className='form-button' onClick={validate}>Submit</button>
        </form>

    </div>
  )
}

export default Form