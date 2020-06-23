import React from 'react';
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { sendToDB } from "./scripts"
//import CKEditor from "@ckeditor/ckeditor5-react"
import axios from "axios"
import { Col } from "../Grid";
import { PostList, PostListItemExpanded } from "../PostList";
import EmptyList from "../EmptyList";
import Footer from "../Footer";
import "./style.css"

class ExpandPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.getReplies = this.getReplies.bind(this);
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
                    id,
                    post,
                    title,
                    author,
                    toggleReply: false
                });
            })
    }

    handleClick() {
        if (localStorage.usertoken != null) {
            if (this.state.toggleReply === false) {
                this.setState({
                    toggleReply: true
                })
            } else {
                this.setState({
                    toggleReply: false
                })
            }
        } else {
            this.props.history.push("/login")
        }
    }

    getReplies() {
        var id = this.props.match.params.id;
        axios.get("/replies/" + id)
            .then((res) => {
                this.setState({ savedReplies: res.data });
            })
            .catch((err) => console.log(err));
    };

    render() {
        const { toggleReply, post, title, author, id } = this.state;
        const originalPost = (
            <div className="expanded-post-container">
                 <div className="post_title"> {title}</div>
                <div className="post_author">by: {author}</div>
               
                <div dangerouslySetInnerHTML={{ __html: post }} className="post_content" />
                <button className="sameCSSbtn" onClick={this.handleClick}>Reply</button>
            </div>
        )
        const replyContainer = (
            <div className="reply-container">
                <input type="text" id="reply-bar"></input>
                <button className="sameCSSbtn" id="reply-button" onClick={async () => { 
                    try{
                        const reply = await sendToDB(id)
                        this.getReplies()
                    } 
                    catch(err) {
                        console.log(err)
                    }
                    }}>Submit</button>
            </div>
        )
        const replies = (
            <Col size="md-12">
                {this.state.savedReplies.length > 0 ?
                    <PostList>
                        {this.state.savedReplies.map(replies => {
                            return (
                                <div className="reply-card" /*onClick={() => this.handleOnClick(replies)}*/>
                                    <div>
                                        <PostListItemExpanded
                                            post_id={replies.author_id}
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