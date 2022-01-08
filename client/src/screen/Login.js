import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios"

import "../styles/Registration.css";
import Header from "../components/Homepage/Header";

const backgroundImageStyle = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/images/bg.jpg)",
};

const Login = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

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

    try {
      const { data } = await axios.post("http://localhost:8000/login", {
        email: user.email,
        password: user.password,
      });

      localStorage.setItem("user-info", JSON.stringify(data));

      setErrorMessage("");

      navigate("/");
    } catch (error) {
      setErrorMessage("Email or password is invalid");
    }
  };

  return (
    <>
    <Header></Header>
    <div className="registration-body" style={backgroundImageStyle}>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="parent-container">
        <div className="child-container">
          <form onSubmit={onFormSubmit} className="login-email">
            <p
              className="login-text"
              style={{ fontSize: "2rem", fontWeight: "800" }}
            >
              Login
            </p>

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

            <p className="show-text"> {errorMessage} </p>
            <div className="input-group">
              <button name="submit" className="btn">
                Login
              </button>
            </div>
            <p className="login-register-text">
              Don't have an account?
              <Link to="/registration">Register Here</Link>.
            </p>
            <br />
            <p className="login-register-text home-text">
              <a href="/">Back to Home Page</a>
            </p>
          </form>
        </div>
      </div>
    </div></>
  );
};

export default Login;
