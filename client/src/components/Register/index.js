import React, { Component } from 'react'
import { register } from './scripts'
import { generateWordList } from './scripts'
import { generateRandomTag } from './scripts'
import { isUser } from './scripts'
import Jumbo from "../Jumbo"
import "./style.css"

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        generateWordList()
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        generateRandomTag()

        const user = {
            username: this.state.username,
            password: this.state.password
        }

    isUser(user.username).then(res => {
            if (res === null) {
                register(user).then(res => {
                    if (res) {
                        this.props.history.push('/login')
                    }
                })
            } else {
                console.log("user already exists.")
            }
        })
    }
    render() {
        return (
            <Jumbo backgroundImage="https://i.imgur.com/3hCgTuP.png">
                <div className="container">
                    <div className="row gap100">
                    <div id="registerform">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 id="headerTitle">Register</h1>
                                <div className="form-group">
                                    <input type="username"
                                        className="form-control"
                                        name="username"
                                        placeholder="Enter username"
                                        value={this.state.username}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Enter password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button type="submit"
                                    id="button">
                                    Join
                            </button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </Jumbo>
        )
    }
}

export default Register