import React from "react";
import Topbar from "../components/topbar";
import MainMenu from "../components/mainmenu";
import { Container, Row, Col } from "react-bootstrap";
import "../css/pages/homepage.css";
import Image from "../img/couple.png";
import LoveImg from "../img/love.png";
import Tarot from "../img/tarot.png";
import twinflame from "../img/twinflame.png";
import career from "../img/career.png";
import astrology from "../img/astrology.png";
import dream from "../img/dream.png";
import mediumship from "../img/mediumship.png";
import numerology from "../img/numerology.png";
import ThemeBtn from "../components/themebtn";
import User1 from "../img/user1.jpg";
import bestPic from "../img/best-psychics.png";
import realPic from "../img/real-psychics.png";
import satisfactionPic from "../img/satisfaction-psychics.png";
import guru2 from '../img/guru12.png';
import Footer from "../components/footer";
import FeatureCard from "../components/featureCard";
const Homepage = () => {
 
  return (
    <>
      <div className="header-block">
        <Container>
          <Row>
            <Col md={6} className="mt-3 mt-sm-5 px-4">
              <div className="header-content pt-4">
                <h1>
                  Welcome to <br />
                  Guru Psychics
                </h1>
              </div>
              <div className="header-links mt-0 py-3 py-lg-5">
                <a href="#" className="register-link">
                  Register Now
                </a>
                <a href="#" className="login-links">
                  Login
                </a>
              </div>
            </Col>
            <Col md={6} className="d-none d-md-block">
              <div className="header-img mx-auto d-flex align-items-end">
                <img src={Image} alt="header-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="sevices-section">
        <Container className="px-md-5 px-0 py-4">
          <Row>
            <Col>
              <h2 className="text-center block-heading">Our Services</h2>
            </Col>
          </Row>
          <Row className="mx-4 mx-sm-5">
            <Col xs={6} sm={6} md={4} lg={3} className="mt-3 p-0">
              <div className="services-card p-2 mx-0 mx-lg-3">
                <div className="services-card-img px-3">
                  <img src={LoveImg} alt="love-logo" className="px-1" />
                </div>
                <div className="services-card-txt mt-3">
                  <h5 className="text-center">
                    Love & <br />
                    Relationships
                  </h5>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={3} className="mt-3 p-0">
              <div className="services-card p-2 mx-0 mx-lg-3">
                <div className="services-card-img px-3">
                  <img src={Tarot} alt="love-logo" className="px-1" />
                </div>
                <div className="services-card-txt mt-3">
                  <h5 className="text-center">Tarot</h5>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={3} className="mt-3 p-0">
              <div className="services-card p-2 mx-0 mx-lg-3">
                <div className="services-card-img px-3">
                  <img src={twinflame} alt="love-logo" className="px-1"  />
                </div>
                <div className="services-card-txt mt-3">
                  <h5 className="text-center">Twin Flames</h5>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={3} className="mt-3 p-0">
              <div className="services-card p-2 mx-0 mx-lg-3">
                <div className="services-card-img px-3">
                  <img src={career} alt="love-logo" className="px-1"  />
                </div>
                <div className="services-card-txt mt-3">
                  <h5 className="text-center">
                    Career & <br />
                    Life Path
                  </h5>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={3} className="mt-3 p-0">
              <div className="services-card p-2 mx-0 mx-lg-3">
                <div className="services-card-img px-3">
                  <img src={astrology} alt="love-logo" className="px-1"  />
                </div>
                <div className="services-card-txt mt-3">
                  <h5 className="text-center">Astrology</h5>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={3} className="mt-3 p-0">
              <div className="services-card p-2 mx-0 mx-lg-3">
                <div className="services-card-img px-3">
                  <img src={dream} alt="love-logo" />
                </div>
                <div className="services-card-txt mt-3">
                  <h5 className="text-center">Dream Analysis</h5>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={3} className="mt-3 p-0">
              <div className="services-card p-2 mx-0 mx-lg-3">
                <div className="services-card-img px-3">
                  <img src={numerology} alt="love-logo" />
                </div>
                <div className="services-card-txt mt-3">
                  <h5 className="text-center">Numerology</h5>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={4} lg={3} className="mt-3 p-0">
              <div className="services-card p-2 mx-0 mx-lg-3">
                <div className="services-card-img px-3">
                  <img src={mediumship} alt="love-logo" />
                </div>
                <div className="services-card-txt mt-3">
                  <h5 className="text-center">Mediumship</h5>
                </div>
              </div>
            </Col>
            
          
          </Row>
          <Row>
            <Col>
              <div class="text-center mt-4">
                <ThemeBtn color="white" text="Try it Now" bg="#f10a3b" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="feature-section">
        <Container className="">
          <Row>
            <Col className="py-4">
              <h2 className="text-center block-heading">
                Our Featured Psychics
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={4} className="p-0">
              <FeatureCard/>
            </Col>
            <Col md={6} lg={4} className="p-0">
              <FeatureCard/>
            </Col>
            <Col md={6} lg={4} className="p-0">
              <FeatureCard/>
            </Col>
            <Col md={6} lg={4} className="p-0">
              <FeatureCard/>
            </Col>
            <Col md={6} lg={4} className="p-0">
              <FeatureCard/>
            </Col>
            <Col md={6} lg={4} className="p-0">
              <FeatureCard/>
            </Col>
          </Row>
          <Row>
            <Col className="py-4">
              <div class="text-center mt-4">
                <ThemeBtn color="black" text="View More" bg="#e6affc\" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="why-guru">
        <Container className="px-5 py-4">
          <Row>
            <Col className="pb-2">
              <h2 className="text-center block-heading">Why Guru Psychics</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={4} lg={4} sm={6}>
              <div className="guru-card text-center p-1 mt-3">
                <div className="guru-card-img mx-5 px-xl-3 px-lg-1 my-2">
                  <img src={bestPic} alt="best-guru" />
                </div>
                <div className="guru-card-detials">
                  <h3 className="my-3 text-purple">Best Online Psychics</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took <a href="#"> &nbsp;Read more..</a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6}>
              <div className="guru-card text-center p-1 mt-3">
                <div className="guru-card-img mx-5 px-xl-3 px-lg-1 my-2">
                  <img src={realPic} alt="best-guru" />
                </div>
                <div className="guru-card-detials">
                  <h3 className="my-3 text-red">Real Psychic Reviews</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took<a href="#"> Read more..</a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6}>
              <div className="guru-card text-center p-1 mt-3">
                <div className="guru-card-img mx-5 px-xl-3 px-lg-1 my-2">
                  <img src={satisfactionPic} alt="best-guru" />
                </div>
                <div className="guru-card-detials">
                  <h3 className="my-3 text-blue">Satisfaction Guaranteed</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took<a href="#"> Read more..</a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="our-experts">
        <Container fluid="md">
          <Row className="d-flex align-items-center">
            <Col md={6} className="mt-5">
              <div className="pb-5">
                <h2 className="block-heading mb-0">
                  Our experts are<br />  available 24/7
                </h2>
                <p className="py-3 mb-0">
                  Enjoy psychic reading on your mobile. Our Psychic Readers are
                  compassionate and will amaze you with a personal live reading
                  unlike any you’ve had before
                </p>
                <div className="text-center mt-3">
                  <ThemeBtn color="black" text="Chat Now" bg="#4ACDEF" />
                </div>
              </div>
            </Col>
            <Col md={6} className="d-none d-md-block">
              <div className="our-expet-img px-2 px-md-3 px-xl-5 pt-4 pt-xl-0">
                  <img src={guru2} alt="our-expert-img"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Homepage;
