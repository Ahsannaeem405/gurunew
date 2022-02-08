import React from "react";
import { Col, Container, Row, Breadcrumb } from "react-bootstrap";
import "../css/pages/contact.css";
import contactImg from "../img/contactus.png";
import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = () => {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#f10a3b",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#f10a3b",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f10a3b",
        borderRadius: "25px",
      },
      "&:hover fieldset": {
        borderColor: "#f10a3b",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f10a3b",
        color: "red",
      },
    },
  });

  return (
    <>
      <div className="pageCrumb">
        <Container fluid>
          <Row>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/contactus">Contact Us</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contactus my-5 mx-5">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col sm={10} md={6} lg={5} xl={4} >
              <div className="contact-us-div1 py-5 px-3">
                <h3>Meet us</h3>
                <div className="mail-us mt-4">
                <EmailOutlinedIcon className="mx-2"/>
                <a href="#">abcmail@xyz.com</a>
                </div>
               
              </div>
              
            </Col>
            <Col sm={10} md={6} lg={5} xl={4}>
              <div className="contact-us-div2 py-5 px-3">
                <h3>Follow Us</h3>
                <div className="contact-social-icons mt-3">
                  <FacebookIcon/>
                  <TwitterIcon/>
                  <InstagramIcon/>
                  <LinkedInIcon/>
                </div>
              </div>
              
            </Col>
            
          </Row>
        </Container>
      </div>
      <div className= "contact-div p-5">
        <Container>
          <Row>
            <Col>
            
            </Col>
          </Row>
          <Row className="">
            <Col md={12} lg={6}>
              <div className="contactimg">
                <img src={contactImg} alt="contact-img" />
              </div>
            </Col>
            {/* form start */}
            <Col
              md={12} lg={6}
              className=""
            >
              <h2 className="text-center">Get In Touch With Us</h2>
              <form className="px-2 text-center contact-form">

                <CssTextField
                  className="w-75 contact-item mt-3 mx-auto "
                  label="Name"
                  id="custom-css-outlined-input"
                />
                <CssTextField
                  className="w-75 contact-item mt-3"
                  label="E-mail"
                  id="custom-css-outlined-input"
                />
                <CssTextField
                  className="w-75 contact-item mt-3"
                  label="Subject"
                  id="custom-css-outlined-input"
                />
                <div class="my-3 w-75 mx-auto contact-textarea">
                  <textarea class="form-control w-100" rows="5">
                    Message
                  </textarea>
                </div>
                <div className="contact-btn w-75 mx-auto">
                  <Button variant="text" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
