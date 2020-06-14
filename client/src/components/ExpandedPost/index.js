import React from "react";
import ReplyButton from "../ReplyButton"
import "./style.css"

function ExpandedPost({ post, title, author }) {
    //var post_content = "test: "+post;
    return (
        <div className="expanded-post-container">
            <div className="post_author">Author: {author}</div>
           <div className="post_title">Title: {title}</div>
           <div dangerouslySetInnerHTML={{ __html: post }} className="post_content" />
           <ReplyButton />
        </div>
    );
}

export default ExpandedPost;