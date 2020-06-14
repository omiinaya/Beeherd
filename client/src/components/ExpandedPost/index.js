import React from "react";
import "./style.css"

function ExpandedPost({ post, title }) {
    return (
        <div className="expanded-post-container">
           <div className="post_title">{title}</div>
           <div className="post_content">{post}</div>
        </div>
    );
}

export default ExpandedPost;