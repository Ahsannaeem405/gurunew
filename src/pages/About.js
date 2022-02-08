import React, { useState, useEffect } from "react";
import { Breadcrumb, Container, Row, Col, Accordion } from "react-bootstrap";
import "../css/pages/aboutpage.css";
import headpic from "../img/aboutmain.jpg";
import ourmisson from "../img/our-mission.png";

const Aboutus = () => {
  const [customers, setcustomers] = useState(320);
  const [experts, setExperts] = useState(35);
  const [experiance, setExperiance] = useState(10);

  const [num, setnum]= useState(0);
  useEffect(()=>{
    if(num===5){ 
  
      const interval1 = setInterval(() => {
        setExperts(experts+1)
           }, 100);
           return ()=>{
              clearInterval(interval1);
          }
     }
   })
  useEffect(()=>{
    if(num===10){ 

     const interval = setInterval(() => {
         setnum(num+1)
          }, 100);
          return ()=>{
             clearInterval(interval);
         }
    }

    
 })

 



  return (
    <>
      <div className="pageCrumb">
        <Container fluid>
          <Row>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/aboutus">About Us</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="about-header py-5">
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={6} className="d-flex align-items-center">
              <div className="mx-lg-5 mx-md-0 mx-2">
                <h4>About Us</h4>
                <h2>
                  We are here <br />
                  just for you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis beatae aliquam omnis labore commodi eius dignissimos
                  ratione officiis officia qua
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-img">
                <img src={headpic} alt="about" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="our-mission pt-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center  flex-row-reverse">
            <Col md={12} lg={6}>
              <div className="mx-lg-0 mx-md-5 mx-0">
                <h3>My mission is to give you a guideline.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam nulla necessitatibus vero fugiat amet? Ullam quam
                  voluptatem adipisci, est praesentium fuga vel voluptates earum
                  nam ab esse facere dolore provident.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam nulla necessitatibus vero fugiat amet? Ullam quam
                  voluptatem adipisci, est praesentium fuga vel voluptates earum
                  nam ab esse facere dolore provident.
                </p>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="mission-pic mx-xl-5 mx-lg-3 mx-md-5">
                <img src={ourmisson} alt="our-mission" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="popular-ques py-5">
        <Container>
          <Row className="">
            <Col>
              <h2 className="text-center about-heading">
                Most Popular Questions
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={12} lg={8}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Question No 1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Question No 2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Question No 3</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Question No 4</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-counter py-5">
        <Container>
          <Row>
            <Col md={6} lg={4}>
              <div className="our-counter text-center mx-5 py-3 text-white">
                <h3>
                  {experiance}
                  <span>+</span>
                </h3>
                <h2>Experiance</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="our-counter text-center mx-5 py-3 text-white">
                <h3>
                  {customers}
                  <span>+</span>
                </h3>
                <h2>Cutomers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="our-counter text-center mx-5 py-3 text-white">
                <h3>
                  {experts}
                  <span>+</span>
                </h3>
                <h2>Experts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="our-servies py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center about-heading">
                Our Experts are ready to help you
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mt-3">
            <Col sm={12} md={12} lg={10}>
              <Row>
                <Col sm={12} md={6}>
                  <div className="about-servies-card d-flex align-items-center p-2 my-3 mx-2 text-danger">
                    <i class="fas fa-stopwatch mx-3"></i>
                    <p className="m-0">Get in touch in a couple of minutes</p>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="about-servies-card d-flex align-items-center  p-2 my-3 mx-2 text-success">
                    <i class="fas fa-star mx-3"></i>
                    <p className="m-0">Real ratings and reviews</p>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="about-servies-card d-flex align-items-center text-center  p-2 my-3 mx-2 text-warning">
                    <i class="fas fa-rocket mx-3"></i>
                    <p className="m-0">Always ready to answer</p>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className="about-servies-card d-flex align-items-center  p-2 my-3 mx-2 text-info">
                    <i class="fas fa-shield-alt mx-3"></i>
                    <p className="m-0">Get in touch in a couple of minutes</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Aboutus;
