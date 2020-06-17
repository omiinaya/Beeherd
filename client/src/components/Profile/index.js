import React, { Component } from 'react'
//import jwt_decode from 'jwt-decode'
import axios from 'axios'
import Footer from '../Footer';
import Journals from '../Journals';
import { JournalListItem, PostList } from '../PostList'
import { Col } from "../Grid";
import EmptyList from "../EmptyList";
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
                console.log(res.data)
                this.setState({ savedJournals: res.data });
            })
            .catch((err) => console.log(err));
    };

    render() {
        const journals = (
           <div>journals</div>
        )
        return (
            <div>
                <div className="profile-container">
                    <h1 className="profile-title text-center">Profile</h1>
                </div>
                <div className="journals-container">
                    <Journals />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Profile