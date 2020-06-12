import React, { Component } from 'react'
import { upload } from '../UserFunctions'
import jwt_decode from 'jwt-decode'
import "./style.css";
import Editor from '../../components/Editor';

class Post extends Component {
    constructor() {
        super()
        this.state = {
            content: '',
            creator_id: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            id: decoded.id,
            username: decoded.username,
            password: decoded.password
        })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const post = {
            creator_id: this.state.id,
            content: this.state.content
        }

        upload(post).then(res => {
            if (res) {
                console.log(post)
            }
        })
    }
    render() {
        return (
            <div class="container">
                <Editor />
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="content"
                                className="form-control"
                                name="content"
                                placeholder="Enter content"
                                value={this.state.content}
                                onChange={this.onChange}
                            />
                        </div>
                        <button type="submit"
                            id="button">
                            Submit
                            </button>
                    </form>
            </div>
        )
    }
}

export default Post