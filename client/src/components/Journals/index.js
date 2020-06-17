import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import React, { useState } from "react"
import { sendToDB } from "./scripts"
import "./style.css"

function Journal() {
  const [text, setText] = useState("")
  return (
    <div className="JournalApp">
      <div className="testing">
        <div className="journal-editor">
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData()
              setText(data)
            }}
          />
        </div>
        <div id="journal-list"></div>
      </div>
      <div className="post-button-container">
        <button onClick={() => { sendToDB(text) }}>Submit</button>
      </div>
    </div>
  )
}

export default Journal;