import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import validator from "validator";
import { Helmet } from "react-helmet";
import { Modal } from "react-bootstrap";
import axios from "axios";

import "../styles/Registration.css";
import Header from "../components/Homepage/Header";
const backgroundImageStyle = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/images/bg.jpg)",
};

const Registration = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if (!validator.isEmail(user.email)) {
      return setErrorEmail("Email is not valid");
    }
    if (user.password.length < 6) {
      return setErrorPassword("Password length must be 6");
    }
    if (user.password !== user.repeatPassword) {
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:8000/userOwner", {
        name: user.name,
        email: user.email,
        password: user.password,
      });

      setShowModal(true);
      await setTimeout(() => {
        localStorage.setItem("user-info", JSON.stringify(data));
        localStorage.setItem("token", data.token);

        setShowModal(false);
        navigate("/task");
      }, 1500);
    } catch (error) {}
  };
  // useEffect for email checking

  useEffect(() => {
    const timerId = setTimeout(async () => {
      try {
        const { data } = await axios.post("/users/search", {
          email: user.email,
        });
        if (data) {
          setErrorEmail("Email already registered");
        } else {
          setErrorEmail("");
        }
      } catch (error) {}
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [user.email]);

  // useEffect for password checking
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (user.password !== user.repeatPassword && user.repeatPassword) {
        setErrorPassword("Password didn't match");
      } else {
        setErrorPassword("");
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [user.password, user.repeatPassword]);

  const [showModal, setShowModal] = useState(false);

  const onHide = () => {
    setShowModal(false);
  };

  const SuccessfulMessage = () => {
    return (
      <Modal
        show={showModal}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="success-message">
            <h1>Registration Successful</h1>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <>
      <Header></Header>
      <div className="registration-body" style={backgroundImageStyle}>
        <Helmet>
          <title>Registration</title>
        </Helmet>

        <SuccessfulMessage />

        <div className="parent-container">
          <div className="child-container registration">
            <form onSubmit={onFormSubmit} className="login-email">
              <p
                className="login-text"
                style={{ fontSize: "2rem", fontWeight: "800" }}
              >
                Registration
              </p>
              <div className="input-group">
                <input
                  onChange={onChange}
                  type="text"
                  placeholder="Username"
                  name="name"
                  value={user.name}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  onChange={onChange}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  required
                />
              </div>
              <p className="show-text"> {errorEmail} </p>
              <div className="input-group">
                <input
                  onChange={onChange}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  onChange={onChange}
                  type="password"
                  placeholder="Confirm Password"
                  name="repeatPassword"
                  value={user.repeatPassword}
                  required
                />
              </div>
              <p className="show-text"> {errorPassword} </p>
              <div className="input-group">
                <button name="submit" className="btn">
                  Register
                </button>
              </div>
              <p className="login-register-text">
                Have an account? <Link to="/">Login Here</Link>.
              </p>
              <p className="login-register-text">
                Need works? <Link to="/registerWorker">Register as worker</Link>
                .
              </p>

              <br />
              <p className="login-register-text home-text">
                <a href="/">Back to Home Page</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
