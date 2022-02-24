import React, { Component } from "react";
import { Card } from "react-bootstrap";
// import Badge from 'react-bootstrap/Badge'
export default class SIngleNews extends Component {
  render() {
    const { author, imgUrl, url, source, description, publishedAt } =
      this.props;
    return (
      <>
        <Card style={{ marginBottom: "20px" }}>
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "88%", zIndex: "1" }}
          >
            {source}
          </span>
          <div>
            <Card.Img variant="top" className="img-fluid" src={imgUrl} />
          </div>
          <Card.Body>
            <Card.Title>{author}</Card.Title>
            <Card.Text>
              {source}
              <small>{description}</small>
            </Card.Text>
            <footer className="blockquote-footer">
              <cite title="Source Title">
                date: {new Date(publishedAt).toGMTString()}
              </cite>
            </footer>
            <a
              className="btn btn-dark"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
          </Card.Body>
        </Card>
      </>
    );
  }
}
