import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/auth/login.css";
import logo from "../img/mainlogo.jpg";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import fb from "../img/facebook1.png";
import googleIcon from '../img/gmail.jpg';


const ariaLabel = { "aria-label": "description" };

const Login = () => {
  <Box
    component="form"
    sx={{
      "& > :not(style)": { m: 1 },
    }}
    noValidate
    autoComplete="off"
  ></Box>;
  return (
    <div className="login-page">
      <Container>
        <Row className="d-flex justify-content-center py-5">
          <Col md={4}>
            <div className="login-div my-5 py-5 px-1 px-md-5">
              <form>
                <div className="login-logo mx-auto">
                  <img src={logo} alt="logo" className="img-fluid" />
                </div>
                <h2 className="text-center py-4">Welcome to Login</h2>
                <div>
                  <Input
                    placeholder="Username"
                    type="text"
                    inputProps={ariaLabel}
                    className="w-100 my-2 p-2"
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    inputProps={ariaLabel}
                    className="w-100 my-2 p-2"
                  />
                </div>
                <div className="d-flex justify-content-end py-2 forgot-password">
                  <a href="#">Forgot Password?</a>
                </div>
                <div className="my-3">
                  <button className="guru-login" type="submit">Login</button>
                </div>
              </form>
              <div className="position-relative py-4">
                  <hr className="m-0"/>
                  <span className="add-more-login">or</span>
                </div>
              <div className="social-login-icons">
                  <img src={fb} alt="fb-logo"/>
                  <img src={googleIcon} alt="google-logo"/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
