import { Flex, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import { useState } from "react";

const Header = () => {

  const [isLoggedIn,SetIsLoggedIn] = useState(false)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <i className="fas fa-home me-3"></i>BasaBari
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand>
              <Link to="/home">Home</Link>
            </Navbar.Brand> 
            <Navbar.Brand>
              <Link to="/search">Search-For-Worker</Link>
            </Navbar.Brand>
          </Nav>
          <Nav>
            <Navbar.Brand>
              <Link to="/register">Register</Link>{" "}
            </Navbar.Brand>
            <Navbar.Brand>
              <Link eventkey={2} to="/login">
                Login
              </Link>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
