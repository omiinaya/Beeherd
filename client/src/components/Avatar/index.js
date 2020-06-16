import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatarBackend from './scripts';
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
                            <div class="col-12  avatardisplay menuavatar">
                                <div class="row">
                                    <div class="col-12 this">
                                    </div>
                                    <div class="col-2 this bodya">
                                        <h6 id="avatarmenu">BODY</h6>
                                        <h6 id="standard1">White</h6>
                                        <h6 id="standard2">Black</h6>
                                    </div>
                                    <div class="col-2 this eyesa">
                                        <h6 id="avatarmenu">EYES</h6>
                                        <h6 id="eyes1">eyes1</h6>
                                        <h6 id="eyes2">eyes2</h6>
                                    </div>
                                    <div class="col-2 this haira">
                                        <h6 id="avatarmenu">STYLE</h6>
                                        <h6 id="hair1">Style1</h6>
                                        <h6 id="hair2">Style2</h6>
                                        <h6 id="hair3">Style3</h6>
                                        <h6 id="hair4">Style4</h6>
                                        <h6 id="hair5">Style5</h6>
                                        <h6 id="hair6">Style6</h6>
                                        <h6 id="hair7">Style7</h6>
                                        <h6 id="hair8">Style8</h6>
                                    </div>
                                    <div class="col-2 this cloth">
                                        <h6 id="ropa1">WEAR</h6>
                                        <h6 id="ropa2">Outfit1</h6>
                                        <h6 id="ropa3">Outfit2</h6>
                                        <h6 id="ropa4">Outfit3</h6>
                                        <h6 id="ropa5">Outfit4</h6>
                                    </div>
                                    <div class="col-3 this Backround">
                                        <h6 id="b1">LOCATION</h6>
                                        <h6 id="bb2">Place1</h6>
                                        <h6 id="bb3">Place2</h6>
                                        <h6 id="bb4">Place3</h6>
                                        <h6 id="bb5">Place4</h6>
                                        <h6 id="bb6">Place5</h6>
                                        <h6 id="bb7">Place6</h6>
                                        <h6 id="bb8">Place7</h6>
                                        <h6 id="bb9">Place8</h6>
                                        <h6 id="bb10">Place9</h6>
                                        <h6 id="bb11">Place10</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row col-6 this">
                            <div class="col-9  avatardisplay es99">
                                <div class="col-12  avatardisplay es1">
                                    <div class="col-12  avatardisplay es2">
                                        <div class="col-12  avatardisplay es3">
                                            <div class="col-12  avatardisplay es4">
                                                <div class="col-12  avatardisplay es5">
                                                    <h6 id="follow9">Create Your avatar</h6>
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
        )
    }
}

export default Avatar;
