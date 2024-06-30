import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Reg() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, setdata] = useState('')
  let Reg = async () =>{
   console.log(email,password)
   fetch("http://localhost:5000/api/reg",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ email, password})
    })
    .then(res => res.json())
    .then(function(res) { console.log(res)})
    .catch(function(res){ console.log(res)})
    
    // console.log(data)
  }

  return (
    <div>
      <center>
        <h1>Registarion page</h1>
        <input placeholder='email'  type="email" onChange={(e)=>setEmail(e.target.value)}  /><br /><br />
        <input placeholder='password' type="password" onChange={(e)=>setPassword(e.target.value)} /><br /><br />
        <button onClick={Reg}>Login</button>
      </center>
    </div>
  )
}


export default Reg