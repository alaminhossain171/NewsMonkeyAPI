import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Blog-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/business">Business</Nav.Link>
              <Nav.Link href="/entertainment">Entertainment</Nav.Link>

              <Nav.Link href="/health"> Health</Nav.Link>
              <Nav.Link href="/science"> Science</Nav.Link>
              <Nav.Link href="/sports">Sports</Nav.Link>
              <Nav.Link href="/technology"> Technology</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
