import {db} from "../dp.js"
import jwt from 'jsonwebtoken'

export const getPosts = (req,res)=>{
    // const q = req.query.cat ? "SELECT * FROM posts WHERE cat = ?" 
    // :"SELECT * FROM posts" 
    const q = "SELECT * FROM posts"
    db.query(q,[req.query.cat] , (err,data)=>{
        if(err){
            return res.status(200).json(err)
        }
        // console.log("In Db Query ");
        // console.log(data)
        return res.status(200).json(data)
    })
}

export const getPost = (req,res)=>{
    // console.log("in get Post")
    const q = "SELECT p.id, `username`, `title`, `descr`, p.img, u.image AS userImg,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";
    db.query(q,[req.params.id] , (err,data)=>{

        if(err){
            return res.status(500).json(err)
        }
        // console.log(data)

        return res.status(200).json(data[0])
    })
}
export const addPost = (req,res)=>{
    // res.json("from functions posts")
}
export const updatePost = (req,res)=>{
    // res.json("from functions posts")
}
// Delete Post 
export const deletePost = (req,res)=>{
    console.log("In Delete Post ")
    const token = req.cookies.access_token
    if(!token ){
        console.log(" Error 1  ")
        return res.status(401).json("Not Authenticated To Delete This Post")
    }
    jwt.verify(token,"jwtkey",(err,userInfo)=>{
        if(err) {
            return res.status(403).json("Not A Valid Token")
        }
        const postId = req.params.id
        const q = "DELETE FROM posts WHERE id = ?  AND uid = ?"
        db.query(q,[postId,userInfo.id] , (err,data)=>{
            if(err){
                return res.status(403).json("You Can Delete Only You Post")
            }
            return res.json("Post Has Been Deleted ")
        })
    });

}