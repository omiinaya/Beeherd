import React from 'react'
import jwt_decode from 'jwt-decode'
import { updateUser } from './scripts'
import { loadUser } from './scripts'

class TagSection extends React.Component {
    constructor() {
        super()
        this.state = {
            current_tag: '',
            current_id: ''
        };
    }

    componentDidMount() {
        const token = localStorage.usertoken
        console.log(token);
        if (localStorage.usertoken != null) {
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            const temp_tag = decoded.temp_tag;
            const user_id = decoded.id;
            this.setState({
                current_tag: temp_tag,
                current_id: user_id
            })
            loadUser()
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

    render() {
        const current_tag = this.state.current_tag;
        const current_id = this.state.current_id;
        const loggedInMenu = (
            <div>
                <div>Current public tag: {current_tag}</div>
                <input type="text" id="change-tag"></input><button onClick={ () => 
                    { 
                        updateUser(current_id);
                        window.open("/", "_self");
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