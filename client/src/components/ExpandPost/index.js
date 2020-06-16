import React, { useState } from 'react';
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { sendToDB } from "./scripts"
//import CKEditor from "@ckeditor/ckeditor5-react"
import axios from "axios"
import { Row, Col } from "../Grid";
import { PostList, PostListItemExpanded } from "../PostList";
import EmptyList from "../EmptyList";
import Footer from "../Footer";
import "./style.css"

class ExpandPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            toggleReply: false,
            savedReplies: [],
            initialized: true,
            post: null
        };
    }
    componentDidMount() {
        this.getReplies();
        var id = this.props.match.params.id;
        axios.get(`/posts/` + id)
            .then(res => {
                const post = res.data[0].post_content;
                const title = res.data[0].post_title;
                const author = res.data[0].author_tag;
                const id = res.data[0].id
                this.setState({
                    post,
                    title,
                    author,
                    id,
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
                console.log(res.data)
            })
            .catch((err) => console.log(err));
    };

    render() {
        const { toggleReply, post, title, author, id } = this.state;
        const originalPost = (
            <div className="expanded-post-container">
                <div className="post_author">Author: {author}</div>
                <div className="post_title">Title: {title}</div>
                <div dangerouslySetInnerHTML={{ __html: post }} className="post_content" />
                <button onClick={this.handleClick}>Reply</button>
            </div>
        )
        const replyContainer = (
            <div className="reply-container">
                <input type="text" id="reply-bar"></input>
                <button id="reply-button" onClick={() => { sendToDB(id) }}>Submit</button>
            </div>
        )
        const replies = (
            <Col size="md-12">
                {this.state.savedReplies.length > 0 ?
                    <PostList>
                        {this.state.savedReplies.map(replies => {
                            //console.log(posts)
                            return (
                                <div className="reply-card" /*onClick={() => this.handleOnClick(replies)}*/>
                                    <div>
                                        <PostListItemExpanded
                                            id={replies.author_id}
                                            author={replies.author_tag}
                                            content={replies.reply_content}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </PostList>
                    :
                    <EmptyList />
                }
            </Col>
        )

        const defaultView = (
            <div>
                {originalPost}
                {replies}
            </div>
        )

        const clickedView = (
            <div>
                {originalPost}
                {replyContainer}
                {replies}
            </div>
        )
        return (
            <div>
                <div>
                    {toggleReply ? clickedView : defaultView}
                </div>
                <Footer />
            </div>
        )
    }
}

export default ExpandPost;