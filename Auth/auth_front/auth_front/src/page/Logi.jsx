import React from 'react'
import { useState } from 'react'
import { json, useNavigate } from 'react-router-dom';
function Logi() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token,settoken] = useState('')
  const navigate = useNavigate();
  let Login = () =>{
  
   console.log(email,password)
   fetch("http://localhost:5000/api/login",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({email: email, password: password})
    })
    .then(res => res.json())
    .then(function(res){console.log(res.UserData)
      if(res.token){
        localStorage.setItem('token',res.token)
        localStorage.setItem('user',JSON.stringify(res.UserData))
      }
      navigate('/home')
     })
    .catch(function(res){ console.log(res)})
    
  }
  return (
    <div>
      <center>
        <h1>Log in</h1>
        <input placeholder='email'  type="email" onChange={(e)=>setEmail(e.target.value)}  /><br /><br />
        <input placeholder='password' type="password" onChange={(e)=>setPassword(e.target.value)} /><br /><br />
        <button onClick={Login}>Login</button>
      </center>
    </div>
  )
}

export default Logi