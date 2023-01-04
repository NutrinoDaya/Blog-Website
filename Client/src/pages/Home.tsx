import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Style/post.scss'


const Home = () => {
    
const [posts,setPosts] = useState([]);
useEffect(()=>{
const fetchDats= async()=>{
    try{
        // const res = await axios.get(`"/posts${cat}"`)
        const res = await axios.get("/posts")
        setPosts(res.data)
    }catch(err){
        console.log(err)
    }
}
    fetchDats();

},[])
//[cat]

// id .... title ... img ... data ... uid ...
  return (
    <div>
      <div className="posts">
        {posts.map(post =>(
            <div className="post" key={post.id}>
                <div className="img">
                {/* <img src={`../upload/${post.img}`} alt="" /> */}
                <img src={post.img} alt="" />
                </div>
                <div className="content">
                    <div className="title">
                    <Link className='LinkP' to={`/post/${post.id}`}>
                    <h3>{post.title}</h3>
                    </Link>
                    </div>
                <div className="disc">
                <p>{post.discr}</p>
                </div>
                <button className='ReadMore'>Read More</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Home

// Styling 
