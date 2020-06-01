import React, { Component } from 'react'
import { upload } from './UserFunctions'

class Post extends Component {
    constructor() {
        super()
        this.state = {
            content: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const post = {
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
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 id="headerTitle">WIP</h1>
                        <div className="form-group">
                            <label htmlFor="content">Post</label>
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
            </div>
        )
    }
}

export default Post