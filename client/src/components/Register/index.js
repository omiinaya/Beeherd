import React, { Component } from 'react'
import { register } from './scripts'
import { generateWordList } from './scripts'
import { generateRandomTag } from './scripts'
import { Link } from 'react-router-dom'
import { isUser } from './scripts'
import Jumbo from "../Jumbo"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                toast.error('Please enter a different username', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        })
    }
    render() {
        return (
            <Jumbo backgroundImage="https://i.imgur.com/bnRAKRp.png" backgroundPositionY="40%" backgroundPositionX="48%">
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
                            <Link to="/login" id="loggin-a">Already have an account?</Link>
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