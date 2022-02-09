import React from "react";
import { Breadcrumb, Container, Row, Col, Accordion } from "react-bootstrap";
import "../css/pages/blogs.css";
import blogImg from "../img/blog-img.jpg";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import { Outlet, Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <div className="pageCrumb">
        <Container fluid>
          <Row>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item to="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item to="/blogs">Blogs</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="blogs pt-3">
        <Container>
          <Row>
            <Col className="our-blogs">
              <h2 className="text-center">Our Blogs</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="blog-section my-3">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="blog-hr">
                <hr />
              </div>

              <h3>Love & Relationships</h3>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
            <div className="blog-item my-3 mx-3">
                <div className="blog-img">
                  <img src={blogImg} alt="blog-img" className="img-fluid" />
                </div>
                <div className="blog-details">
                  <Link to="/blogpage">
                    <h5>
                      Nullam nec urna in sem lacinia malesuada sed mollis tortor
                    </h5>
                  </Link>
                  <div className="blog-info d-flex justify-content-between py-1">
                    <span className="d-flex align-items-center">
                      <PersonIcon className="" />
                      Mr. Sufian
                    </span>
                    <span className="d-flex  align-items-center">
                      <DateRangeIcon className="" />
                      Jan12,2022
                    </span>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo quae delectus velit dolorum magni
                    doloremque ducimus neque <a href="#"> . . . </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
            <div className="blog-item my-3 mx-3">
                <div className="blog-img">
                  <img src={blogImg} alt="blog-img" className="img-fluid" />
                </div>
                <div className="blog-details">
                <Link to="/blogpage">
                    <h5>
                      Nullam nec urna in sem lacinia malesuada sed mollis tortor
                    </h5>
                  </Link>
                  <div className="blog-info d-flex justify-content-between py-1">
                    <span className="d-flex align-items-center">
                      <PersonIcon className="" />
                      Mr. Sufian
                    </span>
                    <span className="d-flex  align-items-center">
                      <DateRangeIcon className="" />
                      Jan12,2022
                    </span>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo quae delectus velit dolorum magni
                    doloremque ducimus neque <a href="#"> . . . </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
            <div className="blog-item my-3 mx-3">
                <div className="blog-img">
                  <img src={blogImg} alt="blog-img" className="img-fluid" />
                </div>
                <div className="blog-details">
                <Link to="/blogpage">
                    <h5>
                      Nullam nec urna in sem lacinia malesuada sed mollis tortor
                    </h5>
                  </Link>
                  <div className="blog-info d-flex justify-content-between py-1">
                    <span className="d-flex align-items-center">
                      <PersonIcon className="" />
                      Mr. Sufian
                    </span>
                    <span className="d-flex  align-items-center">
                      <DateRangeIcon className="" />
                      Jan12,2022
                    </span>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo quae delectus velit dolorum magni
                    doloremque ducimus neque <a href="#"> . . . </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="blog-section my-3">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="blog-hr">
                <hr />
              </div>

              <h3>Dream Analysis</h3>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
            <div className="blog-item my-3 mx-3">
                <div className="blog-img">
                  <img src={blogImg} alt="blog-img" className="img-fluid" />
                </div>
                <div className="blog-details">
                  <a href="#">
                    <h5>
                      Nullam nec urna in sem lacinia malesuada sed mollis tortor
                    </h5>
                  </a>
                  <div className="blog-info d-flex justify-content-between py-1">
                    <span className="d-flex align-items-center">
                      <PersonIcon className="" />
                      Mr. Sufian
                    </span>
                    <span className="d-flex  align-items-center">
                      <DateRangeIcon className="" />
                      Jan12,2022
                    </span>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo quae delectus velit dolorum magni
                    doloremque ducimus neque <a href="#"> . . . </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
            <div className="blog-item my-3 mx-3">
                <div className="blog-img">
                  <img src={blogImg} alt="blog-img" className="img-fluid" />
                </div>
                <div className="blog-details">
                  <a href="#">
                    <h5>
                      Nullam nec urna in sem lacinia malesuada sed mollis tortor
                    </h5>
                  </a>
                  <div className="blog-info d-flex justify-content-between py-1">
                    <span className="d-flex align-items-center">
                      <PersonIcon className="" />
                      Mr. Sufian
                    </span>
                    <span className="d-flex  align-items-center">
                      <DateRangeIcon className="" />
                      Jan12,2022
                    </span>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo quae delectus velit dolorum magni
                    doloremque ducimus neque <a href="#"> . . . </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
            <div className="blog-item my-3 mx-3">
                <div className="blog-img">
                  <img src={blogImg} alt="blog-img" className="img-fluid" />
                </div>
                <div className="blog-details">
                  <a href="#">
                    <h5>
                      Nullam nec urna in sem lacinia malesuada sed mollis tortor
                    </h5>
                  </a>
                  <div className="blog-info d-flex justify-content-between py-1">
                    <span className="d-flex align-items-center">
                      <PersonIcon className="" />
                      Mr. Sufian
                    </span>
                    <span className="d-flex  align-items-center">
                      <DateRangeIcon className="" />
                      Jan12,2022
                    </span>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo quae delectus velit dolorum magni
                    doloremque ducimus neque <a href="#"> . . . </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="blog-section my-3">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="blog-hr">
                <hr />
              </div>
              <h3>Career & Life Path</h3>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
            <div className="blog-item my-3 mx-3">
                <div className="blog-img">
                  <img src={blogImg} alt="blog-img" className="img-fluid" />
                </div>
                <div className="blog-details">
                  <a href="#">
                    <h5>
                      Nullam nec urna in sem lacinia malesuada sed mollis tortor
                    </h5>
                  </a>
                  <div className="blog-info d-flex justify-content-between py-1">
                    <span className="d-flex align-items-center">
                      <PersonIcon className="" />
                      Mr. Sufian
                    </span>
                    <span className="d-flex  align-items-center">
                      <DateRangeIcon className="" />
                      Jan12,2022
                    </span>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo quae delectus velit dolorum magni
                    doloremque ducimus neque <a href="#"> . . . </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
            <div className="blog-item my-3 mx-3">
                <div className="blog-img">
                  <img src={blogImg} alt="blog-img" className="img-fluid" />
                </div>
                <div className="blog-details">
                  <a href="#">
                    <h5>
                      Nullam nec urna in sem lacinia malesuada sed mollis tortor
                    </h5>
                  </a>
                  <div className="blog-info d-flex justify-content-between py-1">
                    <span className="d-flex align-items-center">
                      <PersonIcon className="" />
                      Mr. Sufian
                    </span>
                    <span className="d-flex  align-items-center">
                      <DateRangeIcon className="" />
                      Jan12,2022
                    </span>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo quae delectus velit dolorum magni
                    doloremque ducimus neque <a href="#"> . . . </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
            <div className="blog-item my-3 mx-3">
                <div className="blog-img">
                  <img src={blogImg} alt="blog-img" className="img-fluid" />
                </div>
                <div className="blog-details">
                  <a href="#">
                    <h5>
                      Nullam nec urna in sem lacinia malesuada sed mollis tortor
                    </h5>
                  </a>
                  <div className="blog-info d-flex justify-content-between py-1">
                    <span className="d-flex align-items-center">
                      <PersonIcon className="" />
                      Mr. Sufian
                    </span>
                    <span className="d-flex  align-items-center">
                      <DateRangeIcon className="" />
                      Jan12,2022
                    </span>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo quae delectus velit dolorum magni
                    doloremque ducimus neque <a href="#"> . . . </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="blog-section my-3">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="blog-hr">
                <hr />
              </div>

              <h3>Twin Flames</h3>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="blog-item my-3 mx-3">
                <div className="blog-img">
                  <img src={blogImg} alt="blog-img" className="img-fluid" />
                </div>
                <div className="blog-details">
                  <a href="#">
                    <h5>
                      Nullam nec urna in sem lacinia malesuada sed mollis tortor
                    </h5>
                  </a>
                  <div className="blog-info d-flex justify-content-between py-1">
                    <span className="d-flex align-items-center">
                      <PersonIcon className="" />
                      Mr. Sufian
                    </span>
                    <span className="d-flex  align-items-center">
                      <DateRangeIcon className="" />
                      Jan12,2022
                    </span>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo quae delectus velit dolorum magni
                    doloremque ducimus neque <a href="#"> . . . </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
            <div className="blog-item my-3 mx-3">
                <div className="blog-img">
                  <img src={blogImg} alt="blog-img" className="img-fluid" />
                </div>
                <div className="blog-details">
                  <a href="#">
                    <h5>
                      Nullam nec urna in sem lacinia malesuada sed mollis tortor
                    </h5>
                  </a>
                  <div className="blog-info d-flex justify-content-between py-1">
                    <span className="d-flex align-items-center">
                      <PersonIcon className="" />
                      Mr. Sufian
                    </span>
                    <span className="d-flex  align-items-center">
                      <DateRangeIcon className="" />
                      Jan12,2022
                    </span>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo quae delectus velit dolorum magni
                    doloremque ducimus neque <a href="#"> . . . </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
            <div className="blog-item my-3 mx-3">
                <div className="blog-img">
                  <img src={blogImg} alt="blog-img" className="img-fluid" />
                </div>
                <div className="blog-details">
                  <a href="#">
                    <h5>
                      Nullam nec urna in sem lacinia malesuada sed mollis tortor
                    </h5>
                  </a>
                  <div className="blog-info d-flex justify-content-between py-1">
                    <span className="d-flex align-items-center">
                      <PersonIcon className="" />
                      Mr. Sufian
                    </span>
                    <span className="d-flex  align-items-center">
                      <DateRangeIcon className="" />
                      Jan12,2022
                    </span>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo quae delectus velit dolorum magni
                    doloremque ducimus neque <a href="#"> . . . </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blogs;
