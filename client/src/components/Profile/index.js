import React, { Component } from 'react'
//import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Footer';
import Journals from '../Journals';
import "./style.css";

class Profile extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            toggleEditor: false,
            onlyOne: '1'
        }
    }
    componentDidMount() {
        this.getJournals();
    }

    getJournals = () => {
        axios
            .get("/journals/all")
            .then((res) => {
                if (res.data.length > 0) {
                    this.createDiv(res.data)
                } else {
                    console.log(res.data)
                }
            }).catch((err) => console.log(err));
    }
    createDiv(a) {
        document.getElementById('journals-content').innerText = "";
        for (var i = 0; i < 1; i++) {
            const div = document.createElement('div');
            const last = a.length - 1;
            div.setAttribute("class", "journal-card")
            div.innerHTML = ` 
                <div id="journal_author">Created `+ a[last].created + ` By: ` + a[last].author_tag + `</div>
                <div id="journal_content">`+ a[last].journal_content + `</div>
            `;
            document.getElementById('journals-content').appendChild(div);
        }
    }

    handleClick() {
        if (this.state.toggleEditor === false) {
            this.setState({
                toggleEditor: true
            })
            console.log(this.state.toggleEditor)
        } else {
            this.setState({
                toggleEditor: false
            })
            console.log(this.state.toggleEditor)
        }
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
                <div id="journals-content">There are no journals to display.</div>
                <Footer />
            </div>
        )
        return (
            <div>
                {toggleEditor ? clickedView : defaultView}
            </div>
        )
    }
}

export default Profile