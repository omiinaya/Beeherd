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
            toggleEditor: false
        }
    }
    componentDidMount() {
        //this.getJournals();
        var id = this.props.match.params.id;
        axios.get(`/journals/` + id)
            .then(res => {
                const journal_id = res.data[0].id
                const journal_content = res.data[0].journal_content;
                const journal_author = res.data[0].author_tag;
                this.setState({
                    journal_id,
                    journal_content,
                    journal_author,
                    toggleReply: false
                });
            })
    }

    render() {
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