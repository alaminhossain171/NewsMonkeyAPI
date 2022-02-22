import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class SIngleNews extends Component {
  render() {
    const { author, imgUrl, url, source, description } = this.props;
    return (
      <>
        <Card style={{ marginBottom:'20px' }}>
          <div style={{ height: "200px" }}>

            <Card.Img variant="top" className="img-fluid" src={imgUrl} />
          </div>
          <Card.Body>
            <Card.Title>{author}</Card.Title>
            <Card.Text>
              {source}
              <small>{description}</small>
            </Card.Text>
            <a className="btn btn-dark" href={url} target="_blank" rel="noreferrer">
              Read more
            </a>
          </Card.Body>
        </Card>
      </>
    );
  }
}
