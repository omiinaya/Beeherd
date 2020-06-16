import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatarBackend from './scripts';
import { Link } from 'react-router-dom'
import "./style.css";

class Avatar extends Component {
    componentDidMount() {
        avatarBackend()
    }

    render() {
        return (
            <div>
                <div className="Avatar">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
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
                                        <button className="avatar-dropbtn">Style ⯆</button>
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
                        </div>
                        <div class="avatar-container">
                            <div class="col-6">
                                <div class="col-9  avatardisplay es99">
                                    <div class="col-12  avatardisplay es1">
                                        <div class="col-12  avatardisplay es2">
                                            <div class="col-12  avatardisplay es3">
                                                <div class="col-12  avatardisplay es4">
                                                    <div class="col-12  avatardisplay es5">

                                                    </div>
                                                    <div class="col-12  avatardisplay"> </div>
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
        )
    }
}

export default Avatar;
