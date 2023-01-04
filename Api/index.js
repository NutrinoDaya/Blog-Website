import express from "express";
import PostRoutes from "./routes/posts.js"
import UserRoutes from "./routes/users.js"
import AuthRoutes from "./routes/auth.js"
import cookieParser from 'cookie-parser'
const app = express();

app.use(express.json())
app.use(cookieParser())
app.use("/api/posts",PostRoutes)
app.use("/api/users",UserRoutes)
app.use("/api/auth",AuthRoutes)

app.get("/test" , (req,res)=>{
    res.json("The Server Is Working")
})
app.listen(8800,()=>{
    console.log("App Connected Succefully");
})