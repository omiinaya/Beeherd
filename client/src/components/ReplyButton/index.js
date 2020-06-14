import React from "react";
import Button from "../Button";
import 'bootstrap/dist/css/bootstrap.min.css';


class SeeMoreButton extends React.Component {

  loadPost = (Post) => {
    var currentPost = Post.id;
    //console.log(currentPost);
    window.location.href = "/posts/"+currentPost;
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={() => { this.loadPost(this.props) }
        }>
          See More
        </Button>
      </div>
    );
  }
}

export default SeeMoreButton;