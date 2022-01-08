import { Flex, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <i className="fas fa-home me-3"></i>BasaBari
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/search">Search For Worker</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              {" "}
              <Link to="/register">Register</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link eventKey={2} to="/login">
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
