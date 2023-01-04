import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
const Register = () => {

  const [inputs,setInput] = useState({
    username:"",
    email:"",
    password:"",
  });
  
  const [err,setError] = useState(null)
  const HandleChange = e =>{
    setInput(prev=>({...prev,[e.target.name]: e.target.value}))
  }

 const HandleSubmit = async e =>{
  e.preventDefault();
  try {
    const res = await axios.post("/auth/register",inputs)
    console.log(res)
  } catch (err) {
    setError(err.response.data)
    console.log(err)
  }
 }

  console.log(inputs)
  return (
    <div className='Authentication'>
        <h1> Register</h1>
        <form>
            <input required type="name" name='username' placeholder='username' onChange={HandleChange}/>
            <input required type="email" name='email' placeholder='email'  onChange={HandleChange}/>
            <input required type="password" name='password' placeholder='password'  onChange={HandleChange}/>
            <button onClick={HandleSubmit}>Register </button>
            {err &&<p>{err} </p>}
            <span>Do You Have An Account ? <Link to= '/Login'>Login</Link>

            </span>

        </form>
        </div>
  )
}

export default Register