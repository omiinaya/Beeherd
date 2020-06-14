import React, { Component } from "react";
import Hero from "../Hero";
import { redirectToPost } from "./scripts";
import Footer from "../Footer";
import axios from "axios";
import EmptyList from "../EmptyList";
import { Row, Col } from "../Grid";
import { PostList, PostListItem } from "../PostList";
import SeeMoreButton from "../SeeMoreButton";
import "./style.css";
import { MDBRow, MDBCol } from "mdbreact";

class Home extends Component {
  state = {
    savedPosts: [],
    initialized: true,
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get("/posts/all")
      .then((res) => {
        this.setState({ savedPosts: res.data });
        //console.log(res.data)
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container-home">
        <Hero backgroundImage="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
          <MDBRow>
            <MDBCol size="12">
              <h1 className="animate__animated animate__swing">beeherd</h1>
              <h2>Leave your troubles here</h2>
            </MDBCol>
          </MDBRow>
        </Hero>
        <div class="container-fluid">
          <div class="row jumbotron">
            <div class="content">
              <h4>About this Page</h4>
              <p>Posts are the heart of a beheard. When logged in to your account, create a new post. Feel free to vent and let your voice beheard. Explore through the website reading existing post and remember, "It okay to feel":</p><br>
              
              </br>
              <input type="text" id="display"></input>
            </div>
            <div className="mini-post">
              <input
                type="text"
                id="mini-post-text"
                size="50"
                placeholder="Create Post"
                onClick={redirectToPost}
              ></input>
              <button onClick={redirectToPost}>Post</button>
            </div>
          </div>
        </div>

        <div>
          <Row>
            <Col size="md-12">
              {this.state.savedPosts.length > 0 ? (
                <PostList>
                  {this.state.savedPosts.map((posts) => {
                    console.log(posts);
                    return (
                      <div className="post-card">
                        <div>
                          <PostListItem
                            id={posts.author_id}
                            author={posts.author_tag}
                            title={posts.post_title}
                            content={posts.post_content}
                          />
                          <SeeMoreButton id={posts.id} />
                        </div>
                      </div>
                    );
                  })}
                </PostList>
              ) : (
                <EmptyList />
              )}
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
