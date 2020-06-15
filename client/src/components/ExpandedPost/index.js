import React, { useState } from 'react';
import ReplyButton from "../ReplyButton"
import axios from "axios"
import Loading from '../Loading';
import "./style.css"

class ExpandedPost extends React.Component {
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
                    toggleReply: true
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

    render() {
        const { toggleReply, post, title, author } = this.state;
        const defaultView = (
            <div>test1</div>
        )
        const clickedView = (
            <div>test2</div>
        )
        return (
            //isLoaded ? <div><ExpandedPostSection post={post} title={title} author={author} /><button>Test</button></div> : Loading
            <div className="expanded-post-container">
                <div className="post_author">Author: {author}</div>
                <div className="post_title">Title: {title}</div>
                <div dangerouslySetInnerHTML={{ __html: post }} className="post_content" />
                <button onClick={this.handleClick}>Test</button>
                {toggleReply ? clickedView : defaultView}
            </div>
        )
    }
}


function ExpandedPostSection({ post, title, author }) {
    return (
        <div className="expanded-post-container">
            <div className="post_author">Author: {author}</div>
            <div className="post_title">Title: {title}</div>
            <div dangerouslySetInnerHTML={{ __html: post }} className="post_content" />
        </div>
    );
}

export default ExpandedPost;