import React from 'react';
import "../css/pages/psychics.css";
import { Breadcrumb, Container, Row, Col, Accordion } from "react-bootstrap";

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
      <h1 className="psychics">Hello psychics</h1>
      </>
  );
};

export default Psychics;
