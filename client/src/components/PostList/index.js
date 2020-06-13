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
     console.log(this.props)
;    return (
      <li>
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={this.props.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{this.props.id}<span><h5>{this.props.author}</h5></span></h3>
              
                {this.props.content}
              
            </Col>
          </Row>
        </Container>
      </li>
    );
    }
  }