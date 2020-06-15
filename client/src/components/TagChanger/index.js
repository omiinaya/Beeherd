import React from 'react'
import jwt_decode from 'jwt-decode'

class TagChanger extends React.Component {
    constructor() {
        super()
        this.state = {
            current_tag: '',
        };
    }

    componentDidMount() {
        if (localStorage.usertoken != null) {
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            const temp_tag = decoded.temp_tag;
            this.setState({
                current_tag: temp_tag
            })
        } else {
            const temp_tag = "You are not logged in.";
            this.setState({
                current_tag: temp_tag
            })
            console.log(localStorage.usertoken);
        }
    }

    render() {
        const current_tag = this.state.current_tag;
        return (
            <div>{current_tag}</div>
        )
    }
}

export default TagChanger;