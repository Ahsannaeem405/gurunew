import React from 'react';
import "../css/pages/psychics.css";
import { Breadcrumb, Container, Row, Col, Accordion } from "react-bootstrap";
import FeatureCard from "../components/featureCard";
import ThemeBtn from "../components/themebtn";

const Psychics = () => {
  return (
      <>
      <div className="pageCrumb">
        <Container fluid>
          <Row>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/psychices">Psychics</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="our-psychice">
        <Container className="">
          <Row>
            <Col className="py-4">
              <h2 className="text-center block-heading">
                Our Psychics
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
            </Col><Col md={6} lg={4} className="p-0">
              <FeatureCard/>
            </Col><Col md={6} lg={4} className="p-0">
              <FeatureCard/>
            </Col>
          </Row>
          <Row>
            <Col className="py-4">
              <div class="text-center mt-4">
                <ThemeBtn color="white" text="Show More" bg="#f10a3b" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </>
  );
};

export default Psychics;
