import React, { useState, useEffect } from "react";
import { Breadcrumb, Container, Row, Col, Accordion } from "react-bootstrap";
import "../css/pages/aboutpage.css";
import headpic from "../img/aboutmain.jpg";
import ourmisson from "../img/our-mission.png";
import SpaIcon from "@mui/icons-material/Spa";
import GppGoodIcon from "@mui/icons-material/GppGood";

const Aboutus = () => {
  const [customers, setcustomers] = useState(320);
  const [experts, setExperts] = useState(35);
  const [experiance, setExperiance] = useState(10);

  const [num, setnum] = useState(0);
  useEffect(() => {
    if (num === 5) {
      const interval1 = setInterval(() => {
        setExperts(experts + 1);
      }, 100);
      return () => {
        clearInterval(interval1);
      };
    }
  });
  useEffect(() => {
    if (num === 10) {
      const interval = setInterval(() => {
        setnum(num + 1);
      }, 100);
      return () => {
        clearInterval(interval);
      };
    }
  });

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
            <Col md={12} lg={6} className="d-flex align-items-center">
              <div className="">
                <h3>About Us</h3>
                <p>
                  Guru Psychics is a leading community for online psychics. We
                  are specialized in giving professional psychic guidance when
                  it comes to romance, love, career, family, friends, dreams, or
                  life. At times, it is more helpful to rely on psychics, tarot
                  readers, mediums, fortune tellers, and astrologers to guide
                  you through life and to keep you on the right path. Real
                  psychics have the ability and spiritual knowledge to provide
                  you with the answers that you are looking for.
                  <br />
                  <div className="d-none d-xl-block">
                    Having a reading with our Gurus is simple and effective. We
                    offer special and helpful readings through the help of our
                    readers who are verified experts
                    <br />
                    We are more than fortune tellers or spiritual instructors.
                    We guide you through your life journey and quest for the
                    unveiled truth. Our mission is to help the lost souls in
                    this world.
                    <br />
                    We are here to give a hand to anyone in need for help and in
                    search for clarity. Join our community and enjoy the journey
                    of travelling from the past to the present and onto the
                    future in order to find yourself in the chaos. Do not
                    hesitate to reach out to Guru Psychics when things get out
                    of hand. We are here for you anytime.
                  </div>
                </p>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="about-img py-3">
                <img src={headpic} alt="about" />
              </div>
            </Col>
            <Col md={12} lg={12} className="d-block d-xl-none">
              <p>
                Having a reading with our Gurus is simple and effective. We
                offer special and helpful readings through the help of our
                readers who are verified experts
                <br />
                We are more than fortune tellers or spiritual instructors. We
                guide you through your life journey and quest for the unveiled
                truth. Our mission is to help the lost souls in this world.
                <br />
                We are here to give a hand to anyone in need for help and in
                search for clarity. Join our community and enjoy the journey of
                travelling from the past to the present and onto the future in
                order to find yourself in the chaos. Do not hesitate to reach
                out to Guru Psychics when things get out of hand. We are here
                for you anytime.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="our-mission pt-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center  flex-row-reverse">
            <Col md={12} lg={6}>
              <div className="mx-lg-0 mx-md-5 mx-0">
                <h3>Why Us</h3>
                <p>
                  Sometimes you feel lost and not sure about what to do or how
                  to feel about certain things or people. Talking to friends is
                  just not enough and cannot seem to help at times. When your
                  hands are tied, you need the help of clairvoyant psychics.
                  Whether you have questions about love, career, family,
                  friends, dreams, or life, our Guru psychics will give you a
                  hand.
                  <br />
                  But there are many psychic websites out there. So WHY choose
                  this website in particular?
                </p>
                <p>WHY choose Guru Psychics?</p>
                <p>
                  Let us tell you WHY.
                  <br />
                </p>
                <p>
                  Our name "Guru" describes what we do and why we are the best
                  site for you. Its two syllables Gu and Ru stand for the
                  following:
                </p>
                <ul>
                  <li>
                    Gu represents the spiritual ignorance that most of humankind
                    is in.
                  </li>
                  <li>
                    Ru denotes the radiance of the spiritual knowledge that
                    dispels the spiritual ignorance.
                  </li>
                </ul>
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
      {/* <div className="popular-ques py-5">
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
      </div> */}
      <div className="our-vision py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xm={6} md={6} lg={4}>
              <h2 className="text-center   about-heading">
                Our Mission
              </h2>
            </Col>
            </Row>
            <Row className="d-flex justify-content-center">
            <Col sm={12} md={10} lg={6} className="text-center py-2">
              <p>
                Our mission here is to dispel the darkness of the spiritual
                ignorance that is in humanity and to bestow upon the spiritual
                experiences and knowledge.
                <br />
                In order to succeed this mission, we offer you total honesty. We
                tell you the truth that you need to, but not necessarily, want
                to hear. We help you to find yourself in the right way.
                <br /> Trust that you are in good hands with Guru Psychics.
                <br />
                We are hands down the most authentic psychic website. We are the
                psychics of Guru, we will always be there for you.
              </p>
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
