import React from 'react'
import jwt_decode from 'jwt-decode'
import { changeTag, generateWordList, randomizeTag } from './scripts'
import axios from 'axios';

class TagSection extends React.Component {
    constructor() {
        super()
        this.state = {
            current_tag: '',
            current_id: ''
        };
    }

    componentDidMount() {
        this.getCurrentId()
        generateWordList()
    }

    getCurrentId() {
        if (localStorage.usertoken != null) {
            var token = localStorage.usertoken
            var decoded = jwt_decode(token)
            var temp_tag = decoded.temp_tag;
            var user_id = decoded.id;
            this.setState({
                current_tag: temp_tag,
                current_id: user_id
            })
        } else {
            window.open("/login", "_self")
        }
    }

    getCurrentTag(a) {
        axios.get('/users/id/' + a)
            .then((res) => {
                console.log(res.data.temp_tag)
                this.setState({
                    current_tag: res.data.temp_tag
                })
            })
    }

    getTagFromDB(a) {
        console.log(a)
    }

    render() {
        const { current_tag, current_id } = this.state;
        const loggedInMenu = (
            <div>
                <div className="current-tag">
                    <div className="sameCSStext text-center">Current public tag: </div>
                    <div>{current_tag}</div>
                </div>
                <div className="tag-input text-center">
                    <input type="text" id="change-tag"></input>
                </div>
                <div className="text-center">
                    <button className="sameCSSbtn" onClick={() => {
                        changeTag(current_id);
                        this.getCurrentTag(current_id);
                    }
                    }>Change</button>
                    <button className="sameCSSbtn" onClick={() => {
                        randomizeTag(current_id);
                        this.getCurrentTag(current_id);
                    }
                    }>Random</button>
                </div>
            </div>
        )
        const loggedOutMenu = (
            <div className="sameCSStext">You are not logged in.</div>
        )
        return (
            <div>
                {localStorage.usertoken ? loggedInMenu : loggedOutMenu}
            </div>
        )
    }
}

export default TagSection;