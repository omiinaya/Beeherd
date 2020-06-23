import React from "react";
import Thumbnail from "../Thumbnail";
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
              <h6 className ="sameCSStext">posted by tag/{this.props.author}</h6>
              <h2>{this.props.title}</h2>
                <div className="content_text sameCSStext" dangerouslySetInnerHTML={{__html:this.props.content}}/>
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
              <h6>posted by tag/{this.props.author}</h6>
              <h2>{this.props.title}</h2>
                <div className="content_text_expanded" dangerouslySetInnerHTML={{__html:this.props.content}}/>
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