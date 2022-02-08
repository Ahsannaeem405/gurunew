import React from 'react';
import { Breadcrumb, Container, Row, Col, Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
      <>
      <div className="pageCrumb">
        <Container fluid>
          <Row>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/blogs">Blogs</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      </>
  );
};

export default Blogs;
