import React from "react";
import "../css/pages/blogPage.css";
import { Breadcrumb, Container, Row, Col, Accordion } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import blogImg from "../img/blog-img.jpg";
import DateRangeIcon from "@mui/icons-material/DateRange";

const BlogPage = () => {
  return (
    <>
      <div className="pageCrumb">
        <Container fluid>
          <Row>
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item to="/blogs">Blogs</Breadcrumb.Item>
                <Breadcrumb.Item to="/blogpage">Blog view</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="blogs pt-3">
        <Container>
          <Row>
            <Col className="our-blog">
              <h2 className="text-center">Our Blogs</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col md={12} lg={8}>
              <div className="single-blog p-5 my-4">
                <h3>
                  Nullam nec urna in sem lacinia malesuada sed mollis tortor
                  urna in sem lacinia
                </h3>
                <div className="single-blog-info">
                  <PersonIcon /> Mr. Sufian
                </div>
                <div className="blog-single-img py-3">
                  <img src={blogImg} alt="" />
                </div>
                <div className="blog-dicription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum dolore nobis sapiente vero quis incidunt modi? Odio
                  soluta impedit minima obcaecati rem tenetur, itaque ex quis
                  facilis hic rerum modi.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum dolore nobis sapiente vero quis incidunt modi? Odio
                  soluta impedit minima obcaecati rem tenetur, itaque ex quis
                  facilis hic rerum modi.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum dolore nobis sapiente vero quis incidunt modi? Odio
                  soluta impedit minima obcaecati rem tenetur, itaque ex quis
                  facilis hic rerum modi.
                </div>
              </div>
              <div className="more-blogs mt-5">
                <hr />
                <h4>More Blogs</h4>
                <Row>
                  <Col md={4}>
                    <div className="blog-item my-3 mx-3">
                      <div className="blog-img">
                        <img
                          src={blogImg}
                          alt="blog-img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="blog-details">
                        <a href="#">
                          <h5>
                            Nullam nec urna in sem lacinia malesuada sed mollis
                            tortor
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nemo consequatur illo quae delectus velit
                          dolorum magni doloremque ducimus neque{" "}
                          <a href="#"> . . . </a>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="blog-item my-3 mx-3">
                      <div className="blog-img">
                        <img
                          src={blogImg}
                          alt="blog-img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="blog-details">
                        <a href="#">
                          <h5>
                            Nullam nec urna in sem lacinia malesuada sed mollis
                            tortor
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nemo consequatur illo quae delectus velit
                          dolorum magni doloremque ducimus neque{" "}
                          <a href="#"> . . . </a>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="blog-item my-3 mx-3">
                      <div className="blog-img">
                        <img
                          src={blogImg}
                          alt="blog-img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="blog-details">
                        <a href="#">
                          <h5>
                            Nullam nec urna in sem lacinia malesuada sed mollis
                            tortor
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nemo consequatur illo quae delectus velit
                          dolorum magni doloremque ducimus neque{" "}
                          <a href="#"> . . . </a>
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="most-popular my-4">
                <h5>Most Popular</h5>
                <div className="my-4 popular-links">
                  <a href="#">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo
                  </a>
                </div>
                <div className="my-4 popular-links">
                  <a href="#">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo
                  </a>
                </div>
                <div className="my-4 popular-links">
                  <a href="#">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo
                  </a>
                </div>
                <div className="my-4 popular-links">
                  <a href="#">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo
                  </a>
                </div>
                <div className="my-4 popular-links">
                  <a href="#">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo consequatur illo
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BlogPage;
