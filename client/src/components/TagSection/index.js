import React from 'react'
import jwt_decode from 'jwt-decode'
import { changeTag } from './scripts'

class TagSection extends React.Component {
    constructor() {
        super()
        this.state = {
            current_tag: '',
            current_id: ''
        };
    }

    componentDidMount() {
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
            const temp_tag = "test1";
            const current_id = "test2";
            this.setState({
                current_tag: temp_tag,
                current_id: current_id
            })
        }
        //const currentPosts = await getUserPosts();
        //console.log(currentPosts)
    }

    viewCurrentState(a) {
        console.log(a)
        /*this.setState({
            current_tag: a
        })*/
    }

    render() {
        var current_tag = this.state.current_tag;
        var current_id = this.state.current_id;
        this.viewCurrentState(this.state.current_tag);
        const loggedInMenu = (
            <div>
                <div>Current public tag: {current_tag}</div>
                <input type="text" id="change-tag"></input><button onClick={() => {
                    changeTag(current_id);
                    localStorage.removeItem('usertoken')
                    window.open("/login", "_self")
                }
                }>Change</button>
            </div>
        )
        const loggedOutMenu = (
            <div>You are not logged in.</div>
        )
        return (
            <div>
                {localStorage.usertoken ? loggedInMenu : loggedOutMenu}
            </div>
        )
    }
}

export default TagSection;