import {db} from '../dp.js'
import bcrypt from 'bcryptjs'
import { NONAME } from 'dns'
import jwt from 'jsonwebtoken'
export const test = (req,res)=>{
    res.json("from functions Register test ")

}
export const Register = (req,res)=>{
    // Check If The User In The DataBase // Exists
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q,[req.body.email, req.body.username], (err,data)=>{
        if(err){
            return res.json(err)
        }else{
            if(data.length){

                return res.status(409).json("The User Already Exists")
            }
            // Hash The Passwrod Before Storing it 
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);

            const qIn = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
            // fuck boty 
            const values = [req.body.username,req.body.email,hash
            ]

            db.query(qIn,[values],(err,data)=>{
                if(err){
                    console.log(err)

                    return res.json(err)
                }else{
                    return res.status(200).json("User Registered Succefully ")
                }
            })
        }
    })
}
export const Login = (req,res)=>{
    // CHECK IF THE USER EXISTS IN THE DATA BASE 
    const q = "SELECT * FROM users WHERE username = ? "
    db.query(q,[req.body.username],(err,data)=>{
        if(err){
        return res.json(err)
        }else{
            if(data.length === 0){
                return res.status(404).json("User Doesn't Exists")
            }
            // If There IS No Error And The User Does Exists We Are Gonna Check The Password 
            const isPasswordCorrect = bcrypt.compareSync(req.body.password,data[0].password)
            if(!isPasswordCorrect){
                return res.status(400).json("Wrong User Name Or Password ")
            }
            // 
            const {password,...other} = data[0]
            const token = jwt.sign({id:data[0].id},"jwtkey")
            res.cookie("access_token",token,{
                httpOnly:true
            }).status(200).json(other)
        }
    })
    // res.json("from functions authF Login")
}
export const Logout = (req,res)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true,
    }).status(200).json("User Has Been Logged Out ")
}