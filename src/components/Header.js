import React, { Component } from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
export default class Header extends Component {
  render() {
    return (
      <div>
          <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home">News-Monkey</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    )
  }
}
