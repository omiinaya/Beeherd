import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode'
import { avatarBackend, sendToCreate, sendToUpdate } from './scripts'
import axios from 'axios'
//import { Link } from 'react-router-dom'
import "./style.css";

export class Avatar extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            savedAvatar: []
        }
    }

    componentDidMount() {
        avatarBackend()
        this.currentUser()
    }

    currentUser() {
        if (localStorage.usertoken != null) {
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            const id = decoded.id
            this.setState({
                id: decoded.id
            })
            this.getAvatar(id);
        } else {
            this.props.history.push("/login")
        }
    }

    getAvatar = (a) => {
        axios
            .get("avatars/" + a)
            .then((res) => {
                this.setState({
                    savedAvatar: res.data
                });
            })
            .catch((err) => console.log(err));
    };

    handleClick() {
        var id = this.state.id;
        var avatarExist = this.state.savedAvatar
        console.log(avatarExist.length);
        console.log({ id });
        if (avatarExist.length === 0) {
            sendToCreate(id)
        } else {
            sendToUpdate(this.state.savedAvatar[0].id)
        }
    }

    render() {
        return (
            <div>
                <div className="Avatar">
                    <div className="avatar-container">
                        <div className="row">
                            <div className="dropdown-div">
                                <div className="dropdown">
                                    <button className="avatar-dropbtn">Body ⯆</button>
                                    <div className="dropdown-content">
                                        <h6 id="standard1">White</h6>
                                        <h6 id="standard2">Black</h6>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="avatar-dropbtn">Eyes ⯆</button>
                                    <div className="dropdown-content">
                                        <h6 id="eyes1">eyes1</h6>
                                        <h6 id="eyes2">eyes2</h6>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="avatar-dropbtn">Hair ⯆</button>
                                    <div className="dropdown-content">
                                        <h6 id="hair1">Style1</h6>
                                        <h6 id="hair2">Style2</h6>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="avatar-dropbtn">Outfit ⯆</button>
                                    <div className="dropdown-content">
                                        <h6 id="ropa1">Outfit1</h6>
                                        <h6 id="ropa2">Outfit2</h6>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="avatar-dropbtn">Place ⯆</button>
                                    <div className="dropdown-content">
                                        <h6 id="bb1">Place1</h6>
                                        <h6 id="bb2">Place2</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AvatarDisplay />
                    </div>
                </div>
                <div id="avatar-button">
                <button id="avatar-update-button" onClick={() => {
                    this.handleClick()
                    window.open("/", "_self")
                }
                }>Submit</button>
                </div>
            </div>
        )
    }
}

export class AvatarDisplay extends Component {
    render() {
        return (
            <div className="avatar-box">
                <div>
                    <div className="col-12 avatardisplay es99">
                        <div className="col-12 avatardisplay es1">
                            <div className="col-12 avatardisplay es2">
                                <div className="col-12 avatardisplay es3">
                                    <div className="col-12 avatardisplay es4">
                                        <div className="col-12 avatardisplay es5">
                                        </div>
                                        <div className="col-12 avatardisplay">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
