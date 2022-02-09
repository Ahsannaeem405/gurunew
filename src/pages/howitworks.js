import React from "react";
import "../css/pages/howitsworks.css";
import { Breadcrumb, Container, Row, Col, Accordion } from "react-bootstrap";
import workImg from "../img/howitwork.jpg";
import ThemeBtn from "../components/themebtn";
import Button from '@mui/material/Button';
import step1 from '../img/how-it-works-step1.png';
import step2 from '../img/how-it-works-step2.png';
import step3 from '../img/how-it-works-step3.png';
import step4 from '../img/how-it-work-step4.png';
const HowitsWorks = () => {
  return (
    <>
      <div className="pageCrumb">
        <Container fluid>
          <Row>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/HowitsWorks">
                  How it works
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="works-header ">
        <Container>
          <Row className="d-flex align-items-center py-5">
            <Col md={6}>
              <div className="ourwork p-5">
                <h3>How We Are Working</h3>
                <p className="py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  fugiat dolorum excepturi, doloremque quod aliquid.
                </p>
                <ThemeBtn color="black" text="Get Start" bg="#4ACDEF" />
              </div>
            </Col>
            <Col md={6}>
              <div className="our-work-img">
                <img src={workImg} alt="our work" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="working-steps">
        <Container>
          <Row className="d-flex align-items-center py-5">
            <Col md={6}>
              <div className=" working-steps-item px-4">
                <h4>Submit Listings</h4>
                <p className="py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati quisquam porro iusto suscipit in aspernatur neque
                  voluptates enim cupiditate accusantium illum, cum minus amet
                  eveniet voluptatibus non nihil. Aspernatur, praesentium?
                </p>
                <Button color="error" variant="contained" className="py-3 px-4">Submit Now</Button>
              </div>
            </Col>
            <Col md={6}>
              <div className="steps-img">
                  <img src={step1} alt="step-img" className="img-fluid"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="working-steps  steps-bg">
        <Container>
          <Row className="d-flex align-items-center py-5">
          <Col md={6}>
              <div className="steps-img">
                  <img src={step2 } alt="step-img" className="img-fluid"/>
              </div>
            </Col>
            <Col md={6}>
              <div className=" working-steps-item px-4">
                <h4>Choose Your Package</h4>
                <p className="py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati quisquam porro iusto suscipit in aspernatur neque
                  voluptates enim cupiditate accusantium illum, cum minus amet
                  eveniet voluptatibus non nihil. Aspernatur, praesentium?
                </p>
                <Button color="error" variant="contained" className="py-3 px-4">Submit Now</Button>
              </div>
            </Col>
            
          </Row>
        </Container>
      </div>
      <div className="working-steps ">
        <Container>
          <Row className="d-flex align-items-center py-5">
            <Col md={6}>
              <div className=" working-steps-item px-4">
                <h4>Login to My Account</h4>
                <p className="py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati quisquam porro iusto suscipit in aspernatur neque
                  voluptates enim cupiditate accusantium illum, cum minus amet
                  eveniet voluptatibus non nihil. Aspernatur, praesentium?
                </p>
                <Button color="error" variant="contained" className="py-3 px-4">Submit Now</Button>
              </div>
            </Col>
            <Col md={6}>
              <div className="steps-img">
                  <img src={step3} alt="step-img" className="img-fluid"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="working-steps  steps-bg">
        <Container>
          <Row className="d-flex align-items-center py-5">
          <Col md={6}>
              <div className="steps-img">
                  <img src={step4} alt="step-img" className="img-fluid"/>
              </div>
            </Col>
            <Col md={6}>
              <div className=" working-steps-item px-4">
                <h4>Submit Listing </h4>
                <p className="py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati quisquam porro iusto suscipit in aspernatur neque
                  voluptates enim cupiditate accusantium illum, cum minus amet
                  eveniet voluptatibus non nihil. Aspernatur, praesentium?
                </p>
                <Button color="error" variant="contained" className="py-3 px-4">Submit Now</Button>
              </div>
            </Col>
            
          </Row>
        </Container>
      </div>
      
      
    </>
  );
};

export default HowitsWorks;
