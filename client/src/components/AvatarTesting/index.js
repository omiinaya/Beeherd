import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode'
import { ifAThenB } from './scripts'
import axios from 'axios'
//import { Link } from 'react-router-dom'
import "./style.css";

export class AvatarTesting extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            savedAvatar: []
        }
    }

    componentDidMount() {
        ifAThenB()
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

    render() {
        return (
            <div className="avatar-box-2">
                <div>
                    <div className="col-12 avatardisplay-2 es99">
                        <div className="col-12 avatardisplay-2 es1">
                            <div className="col-12 avatardisplay-2 es2">
                                <div className="col-12 avatardisplay-2 es3">
                                    <div className="col-12 avatardisplay-2 es4">
                                        <div className="col-12 avatardisplay-2 es5">
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
/*
export class AvatarDisplayCircle extends Component {
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
*/