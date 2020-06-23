import React from "react";
import Button from "../Button";
import 'bootstrap/dist/css/bootstrap.min.css';


class ReplyButton extends React.Component {

  loadPost = (Post) => {
    var currentPost = Post.id;
    //console.log(currentPost);
    window.location.href = "/reply/"+currentPost;
  }
  render() {
    return (
      <div>
        <Button className ="sameCSSbtn" type="Primary" onClick={() => { this.loadPost(this.props) }
        }>
          Reply
        </Button>
      </div>
    );
  }
}

export default ReplyButton;