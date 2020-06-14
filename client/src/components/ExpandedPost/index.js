import React from "react";
import "./style.css"

function ExpandedPost({ post, title }) {
    //var post_content = "test: "+post;
    return (
        <div className="expanded-post-container">
           <div className="post_title">Title: {title}</div>
           <div dangerouslySetInnerHTML={{ __html: post }} className="post_content" />
        </div>
    );
}

export default ExpandedPost;