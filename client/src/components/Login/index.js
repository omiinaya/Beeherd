import React, {Component} from 'react'
import { login } from '../UserFunctions'
import "./style.css";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        login(user).then(res => {
            if(res) {
                this.props.history.push('/profile')
            }
        })
    }

    render() {
        return (
            <div class="container">
                <div id="loginform">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 id="headerTitle">Sign In</h1>

                            <div className="form-group">
                                <label htmlFor="username">Username</label>                          
                                <input type="username"
                                className="form-control"
                                name="username"
                                placeholder="Enter username"
                                value={this.state.username}
                                onChange={this.onChange}
                                /> 
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
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
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login