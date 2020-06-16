import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { checkId } from "./script.js";
import TagSection from '../TagSection';
import Avatar from '../Avatar';
//import axios from 'axios';
import "./style.css";

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
    async componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            id: decoded.id,
            username: decoded.username,
            password: decoded.password,
            temp_tag: decoded.temp_tag
        })
    }

    render() {
        const user_id = this.state.id;
        checkId(user_id)
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
                    <TagSection />
                    <Avatar />
                </div>
            </div>
        )
    }
}

export default Profile