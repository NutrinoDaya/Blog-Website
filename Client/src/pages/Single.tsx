import React, { useContext, useEffect, useState } from 'react'
import edit from '../Images/edit.png'
import remove from '../Images/delete.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../Style/Single.scss'
import axios from "axios"
import moment from "moment"
import { AuthContext } from '../Context/authContext';

const Single = () => {

const {currUser} = useContext(AuthContext)

const [post,setPost] = useState({});
const location = useLocation()
const CurrPostId = location.pathname.split("/")[2]
const Navigate = useNavigate();

useEffect(()=>{
const fetchDats= async ()=>{
    try{
        // const res = await axios.get(`"/posts${cat}"`)
        const res = await axios.get(`/posts/${CurrPostId}`)
        setPost(res.data)
        // console.log(res.data)

    }catch(err){
      // console.log("Couldn't Get Post Data")
        console.log(err)
    }
}
    fetchDats();

},[CurrPostId])
//[cat]

const handleDeete = async()=>{
  try{
    // const res = await axios.get(`"/posts${cat}"`)
    await axios.delete(`/posts/${CurrPostId}`)
    Navigate("/")
    // console.log(res.data)

}catch(err){
  // console.log("Couldn't Get Post Data")
    console.log(err)
}
}

console.log(currUser)
  return (
    <div className='Single'>
        <div className="Content">
          <img src={post?.img} alt="" />
          <div className="User">
            <img src={post?.img} alt="" />
            <div className="Info">
              <span> {post.username} </span>
              <p> Posted {moment(post.date).fromNow()} </p>
            </div>
            {currUser.username === post.username &&( <div className="edit">
              <Link to="/Write?edit=2">
              <img src={edit} alt="" />
              </Link>
              <img onClick={handleDeete} src={remove} alt="" />
            </div>)} 

          </div>
          <h1>{post.title}</h1>
          {post.descr}
        </div>
      </div>
  )
}
export default Single