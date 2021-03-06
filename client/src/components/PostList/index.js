import React from "react";
import { Container, Row, Col } from "../Grid";
import {AvatarDisplay} from "../AvatarDisplay"
import "./style.css"

// PostList renders a bootstrap list item
export function PostList({children}) {
  return (
    <ul className="list-group">{children}</ul>
    );
}

  // RecipeListItem renders a bootstrap list item containing data from the recipe api call
  export class PostListItem extends React.Component{

    render(){
     //console.log(this.props)
;    return (
      <li>
        <Container>
          <Row>
            <Col size="md-2">
              <AvatarDisplay />
            </Col>
            <Col size="xs-9 sm-9">
              <h6 className ="post-content-text">posted by tag/{this.props.author}</h6>
              <h2>{this.props.title}</h2>
                <div className="content_text" dangerouslySetInnerHTML={{__html:this.props.content}}/>
            </Col>
          </Row>
        </Container>
      </li>
    );
    }
  }

  export class PostListItemExpanded extends React.Component{

    render(){
     //console.log(this.props)
;    return (
      <li>
        <Container>
          <Row>
            <Col size="md-2">
            <AvatarDisplay />
            </Col>
            <Col size="xs-9 sm-9">
              
              <h2>{this.props.title}</h2>
                <div className="content_text_expanded" dangerouslySetInnerHTML={{__html:this.props.content}}/>
                <h6 className="reply-content-text">by: {this.props.author}</h6>
            </Col>
          </Row>
        </Container>
      </li>
    );
    }
  }

  export class JournalListItem extends React.Component{

    render(){
     //console.log(this.props)
;    return (
      <li>
        <Container>
          <Row>
            <Col size="xs-9 sm-9">
              <h6>posted by tag/{this.props.author_tag}</h6>
              <h2>{this.props.date_created}</h2>
                <div className="content_text_expanded" dangerouslySetInnerHTML={{__html:this.props.journal_content}}/>
            </Col>
          </Row>
        </Container>
      </li>
    );
    }
  }