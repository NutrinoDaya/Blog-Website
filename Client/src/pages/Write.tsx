import React ,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../Style/Write.scss'
const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className="write">
      <div className="content">
    <input type="text" placeholder='Title'></input>
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
            // onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>

          <label className="file" htmlFor="file">
            Upload Paper
          </label>
          <div className="buttons">
            {/* <button>Upload Image</button> */}
            {/* <button>Upload Paper</button> */}
            {/* <button onClick={handleClick}>Publish</button> */}
          </div>
        </div>
        {/* <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              // checked={cat === "art"}
              name="cat"
              value="art"
              id="art"
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              // checked={cat === "science"}
              name="cat"
              value="science"
              id="science"
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              // checked={cat === "technology"}
              name="cat"
              value="technology"
              id="technology"
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              // checked={cat === "cinema"}
              name="cat"
              value="cinema"
              id="cinema"
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              // checked={cat === "design"}
              name="cat"
              value="design"
              id="design"
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              // checked={cat === "food"}
              name="cat"
              value="food"
              id="food"
              // onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Write