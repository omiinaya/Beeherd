import React from "react";
import axios from "axios";
import ExpandedPost from '../ExpandedPost';
import Loading from '../Loading';
import "./style.css"

export class ExpandPost extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoaded: false,
            post: null
        };
    }


componentDidMount() {
    var id = this.props.match.params.id;
    axios.get(`/posts/` + id)
    .then(res => {
        const post = res.data[0].post_content;
        const title = res.data[0].post_title;
        const author = res.data[0].author_tag;
        this.setState({ 
            post,
            title,
            author,
            isLoaded: true
        });
    })
}

render() {
    const { isLoaded, post, title, author } = this.state;
    console.log(this.state);
    //var id=this.props.match.params.id;
    // console.log(this.props)
    //  console.log(id)

    return (
            isLoaded ?  <ExpandedPost post={post} title={title} author={author} /> : <Loading />
    );
}
}


export default ExpandPost;