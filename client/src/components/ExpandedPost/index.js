import React, { useState } from 'react';
import ReplyButton from "../ReplyButton"
import "./style.css"

function ExpandedPost({ post, title, author }) {
    //var post_content = "test: "+post;

    var boolean;

    const defaultView = (
        <div>test1</div>
    )
    const clickedView = (
        <div>test2</div>
    )
        
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    console.log("render");
    

    function handleClick() {
        boolean = !boolean
        console.log(boolean);
    }
    
    return (
        <div className="expanded-post-container">
            <div className="post_author">Author: {author}</div>
           <div className="post_title">Title: {title}</div>
           <div dangerouslySetInnerHTML={{ __html: post }} className="post_content" />
           <ReplyButton />
           <button onClick={ () => {handleClick()}}>Test</button>
           {boolean ? clickedView : defaultView}
        </div>
    );
}

export default ExpandedPost;