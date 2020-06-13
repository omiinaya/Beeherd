import React from "react";
import Button from "../Button";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';

class SeeMoreButton extends React.Component{
 
    sendToDB = (Post) => {
        var dbPost = {
          title: Post.title,
          authors: Post.authors,
          synopsis: Post.synopsis,
          thumbnail: Post.thumbnail,
          link: Post.link
        }
    
        axios.post("/api/Posts", dbPost)
        .then( () => toast.success(`You added ${Post.title} to your Postshelf`))
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
          <Button type="primary" onClick={() => 
            {this.postToDB(this.props)}
            }>
            See More
        </Button>
        </div>
        );
    }
  }

  export default SeeMoreButton;