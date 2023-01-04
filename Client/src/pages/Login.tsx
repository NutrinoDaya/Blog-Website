import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/authContext';

const Login = () => {
  const [inputs,setInput] = useState({
    username:"",
    password:"",
  });
  const [err,setError] = useState(null)

  const navigate = useNavigate()
  const {login} = useContext(AuthContext)
  // console.log(currUser)
  const HandleChange = e =>{
    setInput(prev=>({...prev,[e.target.name]: e.target.value}))
  }

 const HandleSubmit = async e =>{
  e.preventDefault();
  try {
    await login(inputs);
    navigate('/')
    // console.log(res)
  } catch (err) {
    setError(err.response.data)
    console.log(err)
  }
 }
 console.log(inputs)
  return (
    <div className='Authentication'>
        <h1> Login</h1>
        <form>
            <input required type="name" placeholder='username' name='username' onChange={HandleChange}/>
            {/* <input required type="email" placeholder='email' /> */}
            <input required type="password" placeholder='password'  name='password' onChange={HandleChange} />
            <button onClick={HandleSubmit}>Login </button>
            <p>This Is An Error </p>
            <span>Don't You Have An Account ? <Link to= '/Register'>Register</Link>

            </span>

        </form>
        </div>
  )
}

export default Login