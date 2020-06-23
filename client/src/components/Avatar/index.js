<<<<<<< HEAD
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import avatarBackend from "./scripts";
//import { Link } from 'react-router-dom'
import "./style.css";

class Avatar extends Component {
  componentDidMount() {
    avatarBackend();
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
                    <h6 id="standard3">Tanned</h6>
                    <h6 id="standard4">Whitey</h6>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="avatar-dropbtn">Eyes ⯆</button>
                  <div className="dropdown-content">
                    <h6 id="eyes1">eyes1</h6>
                    <h6 id="eyes2">eyes2</h6>
                    <h6 id="eyes3">eyes3</h6>
                    <h6 id="eyes4">eyes4</h6>
                    <h6 id="eyes5">eyes5</h6>
                    <h6 id="eyes6">eyes6</h6>
                    <h6 id="eyes7">eyes7</h6>
                    <h6 id="eyes8">eyes8</h6>
                    <h6 id="eyes9">eyes9</h6>
                    <h6 id="eyes10">eyes10</h6>
                    <h6 id="eyes11">eyes11</h6>
                    <h6 id="eyes12">eyes12</h6>
                    <h6 id="eyes13">eyes13</h6>
                    <h6 id="eyes14">eyes14</h6>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="avatar-dropbtn">Hair ⯆</button>
                  <div className="dropdown-content">
                    <h6 id="hair3">Style1</h6>
                    <h6 id="hair4">Style2</h6>
                    <h6 id="hair5">Style3</h6>
                    <h6 id="hair6">Style4</h6>
                    <h6 id="hair7">Style5</h6>
                    <h6 id="hair8">Style6</h6>
                    <h6 id="hair9">Style7</h6>
                    <h6 id="hair10">Style8</h6>
                    <h6 id="hair11">Style9</h6>
                    <h6 id="hair12">Style10</h6>
                    <h6 id="hair13">Style11</h6>
                    <h6 id="hair14">Style12</h6>
                    <h6 id="hair15">Style13</h6>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="avatar-dropbtn">Outfit ⯆</button>
                  <div className="dropdown-content">
                    <h6 id="ropa1">Outfit1</h6>
                    <h6 id="ropa2">Outfit2</h6>
                    <h6 id="ropa3">Outfit2</h6>
                    <h6 id="ropa4">Outfit2</h6>
                    <h6 id="ropa5">Outfit2</h6>
                    <h6 id="ropa6">Outfit2</h6>
                    <h6 id="ropa7">Outfit2</h6>
                    <h6 id="ropa8">Outfit2</h6>
                    <h6 id="ropa9">Outfit2</h6>
                    <h6 id="ropa10">Outfit2</h6>
                    <h6 id="ropa11">Outfit2</h6>
                    <h6 id="ropa12">Outfit2</h6>
                    <h6 id="ropa13">Outfit2</h6>
                    <h6 id="ropa14">Outfit2</h6>
                    <h6 id="ropa15">Outfit2</h6>
                    <h6 id="ropa16">Outfit2</h6>
                    <h6 id="ropa17">Outfit2</h6>
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
                          <div className="col-12 avatardisplay es5"></div>
                          <div className="col-12 avatardisplay"></div>
=======
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
>>>>>>> b5487625fa4af18e39af5a210e53ceac93248635
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
    );
  }
}
