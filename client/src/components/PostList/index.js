import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";


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
            <Col size="xs-2 sm-2 md-1">
              <Thumbnail src={this.props.thumbnail} />
            </Col>
            <Col size="xs-9 sm-9">
              <h6>posted by tag/{this.props.author}</h6>
              <h2>{this.props.title}</h2>
                <div className="content_text" dangerouslySetInnerHTML={{__html:this.props.content}}/>
            </Col>
          </Row>
        </Container>
      </li>
    );
    }
  }