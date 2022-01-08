import { Flex, Text, Box } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();

  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [name, SetName] = useState("");

  const onLogoutClick = async () => {
    try {
      localStorage.removeItem("user-info");

      SetIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };
  useEffect(() => {
    var getUser = localStorage.getItem("user-info");

    getUser = JSON.parse(getUser);

    if (getUser) {
      SetIsLoggedIn(true);
      SetName(getUser.name);
    } else SetIsLoggedIn(false);
  }, []);

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
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/search">Search-For-Worker</Link>
            </Navbar.Brand>
          </Nav>
          {!isLoggedIn && (
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
          )}
          {isLoggedIn && (
            <Nav>
              <Navbar.Brand>{name}</Navbar.Brand>
              <Navbar.Brand>
                <Link to="#" onClick={onLogoutClick}>
                  Logout
                </Link>
              </Navbar.Brand>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
