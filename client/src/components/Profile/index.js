import React, { Component } from 'react'
//import jwt_decode from 'jwt-decode'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Footer from '../Footer';
import Journals from '../Journals';
import EmptyList from "../EmptyList";
import { Row, Col } from "../Grid";
import { PostList, PostListItem } from "../PostList";
import "./style.css";

class Profile extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            toggleEditor: false,
            savedPosts: []
        }
    }
    componentDidMount() {
        this.currentUser();
    }

    currentUser() {
        if (localStorage.usertoken != null) {
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            const id = decoded.id
            this.setState({
                id: decoded.id
            })
            this.getUserPosts(id);
        } else {
            this.props.history.push("/login")
        }
    }

    getJournals = () => {
        axios
            .get("/journals/all")
            .then((res) => {
                if (res.data.length > 0) {
                    this.createDiv(res.data)
                    this.createDiv2(res.data)
                } else {
                    console.log(res.data)
                }
            }).catch((err) => console.log(err));
    }

    getUserPosts = (a) => {
        axios
            .get("/posts/user/" + a)
            .then((res) => {
                //console.log(res.data)
                this.setState({
                    savedPosts: res.data
                })
                //console.log(this.state.savedPosts);
            }).catch((err) => console.log(err));
    }

    createDiv(a) {
        document.getElementById('journals-content').innerText = "";
        for (var i = 0; i < 1; i++) {
            const div = document.createElement('div');
            const last = a.length - 1;
            div.setAttribute("class", "journal-card")
            div.innerHTML = ` 
                <div class="profile-title">Latest Journal</div>
                <div id="journal_author">Created `+ a[last].created + ` By: ` + a[last].author_tag + `</div>
                <div id="journal_content">`+ a[last].journal_content + `</div>
            `;
            document.getElementById('journals-content').appendChild(div);
        }
    }

    createDiv2(a) {
        document.getElementById('journal-list').innerText = "";
        for (var i = 0; i < 4; i++) {
            const div = document.createElement('div');
            div.setAttribute("class", "journal-card")
            div.innerHTML = ` 
                <div id="journal_author">Created `+ a[i].created + ` By: ` + a[i].author_tag + `</div>
                <div id="journal_content">`+ a[i].journal_content + `</div>
            `;
            document.getElementById('journal-list').appendChild(div);
        }
    }

    handleClick() {
        if (this.state.toggleEditor === false) {
            this.setState({
                toggleEditor: true
            })
            this.getJournals()
            console.log(this.state.toggleEditor)
        } else {
            this.setState({
                toggleEditor: false
            })
            console.log(this.state.toggleEditor)
        }
    }

    handleOnClickA(a) {
        if (localStorage.usertoken != null) {
            this.props.history.push("/posts/" + a.id)
        } else {
            this.props.history.push("/login")
        }
    }

    handleDelete(a) {
        axios
            .delete('/posts/'+a.id)
        this.currentUser()
    }

    render() {
        const { toggleEditor } = this.state;
        const clickedView = (
            <div>
                <div className="profile-container">
                    <h1 className="profile-title text-center">Profile</h1>
                    <center>
                        <div className="mx-auto order-0">
                            <button className="mx-auto profile-buttons" onClick={() => this.handleClick()}>See your Posts</button>
                        </div>
                    </center>
                </div>
                <div id="journals-content">There are no journals to display.</div>
                <div id="journals-container">
                    <Journals />
                </div>
                <Footer />
            </div>
        )
        const defaultView = (
            <div>
                <div className="profile-container">
                    <h1 className="profile-title text-center">Profile</h1>
                    <center>
                        <div className="mx-auto order-0">
                            <button className="mx-auto profile-buttons" onClick={() => this.handleClick()}>Write a Journal</button>
                        </div>
                    </center>
                </div>
                <Row>
                    <Col size="md-3">
                        <div className="user-control-panel">
                            <div className="control-panel-option">Change Tag</div>
                            <div className="control-panel-option" onClick={() => console.log("currently under construction")}>Change Username</div>
                            <div className="control-panel-option" onClick={() => console.log("currently under construction")}>Change Password</div>
                            <div className="control-panel-option" onClick={() => console.log("currently under construction")}>Backup All Data</div>
                            <div className="control-panel-option" onClick={() => console.log("currently under construction")}>Delete All Data</div>
                            <div className="control-panel-option-last" onClick={() => console.log("currently under construction")}>Close Account</div>
                        </div>
                    </Col>
                    <Col size="md-9">
                        {this.state.savedPosts.length > 0 ?
                            <PostList>
                                {this.state.savedPosts.slice(0).reverse().map(posts => {
                                    return (
                                        <div className="post-card" /*onClick={() => this.handleOnClickA(posts)}*/ >
                                            <div>
                                                <PostListItem
                                                    id={posts.author_id}
                                                    author={posts.author_tag}
                                                    title={posts.post_title}
                                                    content={posts.post_content}
                                                />
                                            </div>
                                            <div className="cp-button-container">
                                                <button className="cp-post-button" onClick={() => this.handleDelete(posts)}>Delete</button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </PostList>
                            :
                            <EmptyList />
                        }
                    </Col>
                </Row>
                <Footer />
            </div >
        )
        return (
            <div>
                {toggleEditor ? clickedView : defaultView}
            </div>
        )
    }
}

export default Profile