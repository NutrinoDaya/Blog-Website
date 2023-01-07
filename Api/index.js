import express from "express";
import PostRoutes from "./routes/posts.js"
import UserRoutes from "./routes/users.js"
import AuthRoutes from "./routes/auth.js"
import cookieParser from 'cookie-parser'
import multer from "multer"
const app = express();

app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../Client/Uploads')
    },
    filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
    cb(null, Date.now() + file.originalname)
    }
  })
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '../Client/Uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })

const upload = multer({storage})


app.post('/api/upload1', upload.single('img'), function (req, res) {
    console.log("in upload image")
    const file = req.file
    return res.status(200).json(file)
})

app.post('/api/upload2', upload.single('paper'), function (req, res) {
    console.log("in upload paper")
    const file = req.file
    return res.status(200).json(file)
})

app.use("/api/posts",PostRoutes)
app.use("/api/users",UserRoutes)
app.use("/api/auth",AuthRoutes)

app.get("/test" , (req,res)=>{
    res.json("The Server Is Working")
})
app.listen(8800,()=>{
    console.log("App Connected Succefully");
})