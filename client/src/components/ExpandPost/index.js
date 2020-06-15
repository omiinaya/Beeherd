import React, { useState } from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { sendToDB } from "./scripts"
import CKEditor from "@ckeditor/ckeditor5-react"
import axios from "axios"
import "./style.css"

class ExpandPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            toggleReply: false,
            post: null
        };
    }
    componentDidMount() {
        var id = this.props.match.params.id;
        axios.get(`/posts/` + id)
            .then(res => {
                const post = res.data[0].post_content;
                const title = res.data[0].post_title;
                const author = res.data[0].author_tag;
                this.setState({
                    post,
                    title,
                    author,
                    toggleReply: false
                });
            })
    }

    handleClick() {
        console.log(this.state.toggleReply);
        if (this.state.toggleReply == false) {
            this.setState({
                toggleReply: true
            })
        } else {
            this.setState({
                toggleReply: false
            })
        }
    }

    getReplies = () => {
        axios
          .get("/replies/all")
          .then((res) => {
            this.setState({ savedReplies: res.data });
            //console.log(res.data)
          })
          .catch((err) => console.log(err));
      };

    render() {
        const { toggleReply, post, title, author } = this.state;
        const defaultView = (
            <div className="expanded-post-container">
                <div className="post_author">Author: {author}</div>
                <div className="post_title">Title: {title}</div>
                <div dangerouslySetInnerHTML={{ __html: post }} className="post_content" />
                <button onClick={this.handleClick}>Reply</button>
            </div>
        )
        const clickedView = (
            <div>
                {defaultView}
                <div className="reply-container">
                    <input type="text" id="reply-bar"></input>
                    <button onClick={() => { sendToDB() }}>Submit</button>
                </div>
            </div>
        )
        return (
            <div>
                {toggleReply ? clickedView : defaultView}
            </div>
        )
    }
}

export default ExpandPost;