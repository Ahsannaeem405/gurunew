import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import './topbar.css';

const Topbar = () => {
  return (
      <>
      <div className='topbar'>
        <Container>
          <Row>
            <Col >
            <p class="text-center topbar-text mb-0">Free 3 minutes + 90% OFF your first reading</p>
            </Col>
          </Row>
        </Container>
       
      </div>
      </>
  );
};

export default Topbar;
