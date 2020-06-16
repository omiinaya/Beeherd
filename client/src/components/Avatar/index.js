import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { avatarBackend } from './scripts';
import jwt_decode from 'jwt-decode'
import { sendToDB } from './scripts'
//import { Link } from 'react-router-dom'
import "./style.css";

class Avatar extends Component {
    constructor() {
        super()
        this.state = {
            owner_id: ''
        };
    }

    componentDidMount() {
        avatarBackend()

        if (localStorage.usertoken != null) {
            var token = localStorage.usertoken
            var decoded = jwt_decode(token)
            var a = decoded.id
            this.setState({
                owner_id: a,
            })
        } else {
            const owner_id = "test";
            this.setState({
                owner_id: owner_id
            })
        }
    }

    render() {
        var owner_id = this.state.owner_id;
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
                        <div className="col-4 avatar-box">
                            <div className="col-12">
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
                    </div>
                </div>
                <button onClick={() => {
                    sendToDB(owner_id);
                    localStorage.removeItem('usertoken')
                    window.open("/login", "_self")
                }
                }>Change</button>
            </div>
        )
    }
}

export default Avatar;
