import React, { Component } from 'react'
//import jwt_decode from 'jwt-decode'
import axios from 'axios'
import Footer from '../Footer';
import Journals from '../Journals';
import "./style.css";

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleEditor: false,
            savedJournals: '',
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
        for (var i = 0; i < a.length; i++) {
            const div = document.createElement('div');
            div.setAttribute("class", "journal-card")
            div.innerHTML = ` 
                <div id="journal_author">Created `+a[0].created+` By: `+a[0].author_tag+`</div>
                <div id="journal_content">`+a[0].journal_content+`</div>
            `;
            document.getElementById('journals-content').appendChild(div);
        }
    }

    render() {
        return (
            <div>
                <div className="profile-container">
                    <h1 className="profile-title text-center">Profile</h1>
                </div>
                <div id="journals-content">There are no journals to display.</div>
                <div id="journals-container">
                    <Journals />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Profile