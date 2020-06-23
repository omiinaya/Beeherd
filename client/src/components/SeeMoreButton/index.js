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
        <Button className ="sameCSSbtn" type="primary" onClick={() => { this.loadPost(this.props) }
        }>
          ▼
        </Button>
      </div>
    );
  }
}

export default SeeMoreButton;