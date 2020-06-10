import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import "./style.css";
import { LoadPostsFromID } from "./script.js";
import axios from 'axios'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            username: '',
            password: '',
            temp_tag: ''
        }
    }
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            id: decoded.id,
            username: decoded.username,
            password: decoded.password,
            temp_tag: decoded.temp_tag
        })

        axios.get(`/posts/all`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
                console.log(posts);
            })

        axios.get(`/posts/all/test`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
                console.log(posts);
            })
    }


    render() {
        const user_id = this.state.id;
        LoadPostsFromID(user_id)
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Profile</h1>
                    </div>
                    <div className="user-info">
                        <div className="username-text">Username: {this.state.username}</div>
                        <div className="tag-text">Temp Tag: {this.state.temp_tag}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile