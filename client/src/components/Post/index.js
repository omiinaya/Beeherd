import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import React, { useState } from "react"
import { sendToDB } from "./scripts"
import "./style.css"

function Post() {
  const [text, setText] = useState("")
  return (
    <div className="EditorApp">
      <div className="post-title-container">
        <input type="text" id="post-title-input" placeholder="Enter post title."></input>
      </div>
      <div className="editor">
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData()
            setText(data)
          }}
        />
      </div>
      <div className="post-button-container">
      <button onClick={() => { sendToDB(text) }}>Submit</button>
      </div>
    </div>
  )
}

export default Post;