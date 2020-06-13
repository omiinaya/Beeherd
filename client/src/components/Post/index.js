import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import React, { useState } from "react"
import { sendToDB } from "./scripts"
import "./style.css"

function Post() {
  const [text, setText] = useState("")
  return (
    <div className="App">
      <div className="editor">
      <input type="text" id="title-input" placeholder="Enter post title. (WIP)"></input>
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData()
            setText(data)
          }}
        />
        <button onClick={() => { sendToDB(text) }}>Submit</button>
      </div>
    </div>
  )
}

export default Post;