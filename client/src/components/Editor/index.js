import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import React, { useState } from "react"
import "./style.css"
import { Test } from "./scripts"

function Editor() {
  const [text, setText] = useState("")
  return (
    <div className="App">
      <div className="editor">
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData()
            setText(data)
            //console.log(data);
          }}
        />
        <button onClick={() => { Test(text) }}>Submit</button>
      </div>
    </div>
  )
}

export default Editor