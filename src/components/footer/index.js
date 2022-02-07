import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import quality from "../../img/quality.png";
import tiktok from "../../img/tiktok.png";
import fb from "../../img/fb.png";
import instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";
import mastercard from "../../img/Layer 2.png";
import Paypal from "../../img/Layer 1.png";
import visa from "../../img/Layer 3.png";

const Footer = () => {
  return (
    <>
      <div className="footer pb-4">
        <Container>
          <Row>
            <Col sm={3} xm={6} className="pt-3">
              <h5 className="mt-2">ABOUT GURU PSYCHICS</h5>
              <ul>
                <li>
                  <i class="fas fa-circle"></i>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <i class="fas fa-circle"></i>
                  <a href="#">Your safety & security matters</a>
                </li>
                <li>
                  <i class="fas fa-circle"></i>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <i class="fas fa-circle"></i>
                  <a href="#">Refund policy</a>
                </li>
                <li>
                  <i class="fas fa-circle"></i>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <i class="fas fa-circle"></i>
                  <a href="#">Disclaimer</a>
                </li>
              </ul>
            </Col>
            <Col sm={2} xm={6} className="pt-3">
              <h5 className="mt-2">HOW IT WORKS</h5>
              <ul>
                <li>
                  <i class="fas fa-circle"></i>
                  <a href="#">Getting Started</a>
                </li>
                <li>
                  <i class="fas fa-circle"></i>
                  <a href="#">How to find an advisor</a>
                </li>
                <li>
                  <i class="fas fa-circle"></i>
                  <a href="#">Refund policy</a>
                </li>
                <li>
                  <i class="fas fa-circle"></i>
                  <a href="#">Articles</a>
                </li>
              </ul>
            </Col>
            <Col sm={2} xm={6} className="pt-3">
              <h5 className="mt-2">ARE YOU A PSYCHIC?</h5>
              <ul>
                <li>
                  <i class="fas fa-circle"></i>
                  <a href="#">Apply as an advisor</a>
                </li>
              </ul>
            </Col>
            <Col sm={2} xm={6} className="pt-3 pt-md-5">
              <div className="quality-img ">
                <img src={quality} alt="quality-img" />
              </div>
            </Col>
            <Col sm={3} xm={6} className="pt-2 px-5 px-md-0">
              <div className="footer-social-link pt-3">
                <a href="#">
                  <img src={tiktok} alt="tiktok-img" />
                </a>
                <a href="#">
                  <img src={fb} alt="tiktok-img" />
                </a>
                <a href="#">
                  <img src={instagram} alt="tiktok-img" />
                </a>
                <a href="#">
                  <img src={twitter} alt="tiktok-img" />
                </a>
              </div>
              <div className="our-payment">
                <div className="payement-img py-1 text-center text-md-end">
                  <img src={mastercard} alt="payment" />
                </div>
                <div className="payement-img py-1 text-center text-md-end pr-3">
                  <img src={Paypal} alt="payment" />
                </div>
                <div className="payement-img py-1 text-center text-md-end pr-5">
                  <img src={visa} alt="payment" />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} xm={6}>
              <div className="site-rights text-center">
                <p>© 2022 All Rights Reserved</p>
                <p>Guru-Psychics.com is operated by TwinSwan SL</p>
                <p>
                  * All prices are listed in $ credits. One $ credit is
                  equivalent to $1 USD.
                </p>
                <p>
                  Psychics are not employees or representatives of Guru
                  Psychics.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
