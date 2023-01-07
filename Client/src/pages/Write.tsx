import React ,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../Style/Write.scss'
import axios from 'axios';
const Write = () => {
  const [value, setValue] = useState('');
  const [img,SetImg] = useState(null)
  const [paper , SetPaper] = useState(null)
  const [title,SetTitle] = useState("")
  // console.log("img : ")
  // console.log(img);
  // console.log("paper : ")
  // console.log(paper);
  // console.log("title : ")
  // console.log(title);
  // console.log("value : ")
  // console.log(value);
  const uploadImg = async ()=>{
    try {

      const formData = new FormData()
      formData.append("img",img)
      const res = await axios.post("/upload1",formData)
      console.log("Image : ")
      console.log(res.data)

    } catch (error) {
        console.log(error);
    }
  }
  const uploadPaper = async ()=>{
    try {

      const formData = new FormData()
      formData.append("paper",paper)
      const res = await axios.post("/upload2",formData)
      console.log("paper : ")

      console.log(res.data)

    } catch (error) {
        console.log(error);
    }
  }
  const handlePublish = async e  =>{
    e.preventDefault();
    uploadImg();
    uploadPaper()

  }

  return (
    <div className="write">
      <div className="content">
    <input type="text" placeholder='Title' onChange={e=>{SetTitle(e.target.value)}}></input>
    <div className="editorContainer">
    <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />;
    </div>
    <div className="other-authors">
      <br></br><br></br>
          <h1>Add Other Authors</h1>
          <div className="author">
            <label htmlFor="author-2-name">Author 2 Name:</label>
            <input type="text" id="author-2-name"></input>
            <label htmlFor="author-2-email">Author 2 Email:</label>
            <input type="text" id="author-2-email"></input>
            <input type="checkbox" id="author-2-primary"></input>
            <label htmlFor="author-2-primary">Primary</label>
          </div>
          <div className="author">
            <label htmlFor="author-3-name">Author 3 Name:</label>
            <input type="text" id="author-3-name"></input>
            <label htmlFor="author-3-email">Author 3 Email:</label>
            <input type="text" id="author-3-email"></input>
            <input type="checkbox" id="author-3-primary"></input>
            <label htmlFor="author-3-primary">Primary</label>
          </div>
          <div className="author">
            <label htmlFor="author-4-name">Author 4 Name:</label>
            <input type="text" id="author-4-name"></input>
            <label htmlFor="author-4-email">Author 4 Email:</label>
            <input type="text" id="author-4-email"></input>
            <input type="checkbox" id="author-4-primary"></input>
            <label htmlFor="author-4-primary">Primary</label>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => SetImg(e.target.files[0])}
          />
          <label className="file"  htmlFor="file" >
            Upload Image
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => SetPaper(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Paper
          </label>
          <div className="buttons">

            {/* <button>Upload Image</button> */}
            {/* <button>Upload Paper</button> */}
            <button onClick={handlePublish}>Publish</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Write