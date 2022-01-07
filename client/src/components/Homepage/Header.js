import { Flex, Text, Box } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import {Navbar, Container, Nav} from "react-bootstrap"



const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">BasaBari</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/search">Search For Worker</Nav.Link>
    
    </Nav>
    <Nav>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link eventKey={2} href="/login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;
