import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import "./style.css";

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            test: ''
            
        }
    }
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.username,
            password: decoded.password,
            test: decoded.test
        })
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Profile</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Username: {this.state.username}</td>
                                <td>Test: {this.state.test}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile