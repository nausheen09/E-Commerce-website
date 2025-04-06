import React from "react";
import { Carousel, Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";


const CtaCarousel = () => {
  return (
    <>
      <section >
        {/* Carousel Section */}
        <section
          className="py-5 position-relative"
          style={{ minHeight: "700px" }}
        >
          <div
            className="position-absolute w-100 h-100"
            style={{
              backgroundImage: "url(src/assets/img/gallery/cta.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              filter: "brightness(0.7)",
            }}
          ></div>
          <div
            className="position-absolute w-100 h-100"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.41)",
            }}
          ></div>
          <Container>
            <Row>
              <Col>
                <Carousel controls indicators fade>
                  <Carousel.Item interval={10000}>
                    <div className="text-white text-center py-5 mt-5">
                      <h5 className="display-6 fw-bold text-light mb-3">
                        Visit our Outlets in
                      </h5>
                      <h1 className="display-3 text-white fw-bold mb-5">London</h1>
                      <Button
                        variant="dark"
                        className="fs-4 fw-bold px-4 py-2 mb-5 shadow-lg"
                        style={{
                          border: "2px solid orange",
                          transition: "0.3s",
                        }}
                        onMouseOver={(e) => (e.target.style.color = "white")}
                        onMouseOut={(e) => (e.target.style.color = "white")}
                      >
                        See Addresses
                      </Button>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <div className="text-white text-center py-5 mt-5">
                      <h5 className="display-6 fw-bold text-light mb-3">
                        Visit our Outlets in
                      </h5>
                      <h1 className="display-3 text-white fw-bold mb-5">Bristol</h1>
                      <Button
                        variant="dark"
                        className="fs-4 fw-bold px-4 py-2 shadow-lg mb-5"
                        style={{
                          border: "2px solid orange",
                          transition: "0.3s",
                        }}
                        onMouseOver={(e) => (e.target.style.color = "white")}
                        onMouseOut={(e) => (e.target.style.color = "white")}
                      >
                        See Addresses
                      </Button>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <div className="text-white text-center py-5 mt-5">
                      <h5 className="display-6 fw-bold text-light mb-3">
                        Visit our Outlets in
                      </h5>
                      <h1 className="display-3 text-white fw-bold mb-5">Birmingham</h1>
                      <Button
                        variant="dark"
                        className="fs-4 fw-bold px-4 py-2 shadow-lg mb-5"
                        style={{
                          border: "2px solid orange",
                          transition: "0.3s",
                        }}
                        onMouseOver={(e) => (e.target.style.color = "white")}
                        onMouseOut={(e) => (e.target.style.color = "white")}
                      >
                        See Addresses
                      </Button>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer Section */}
        <section className="py-5 bg-light" >
          <Container>
            <Row className="justify-content-between">
              <Col lg={2} md={6} className="mb-3">
                <h5 className="fw-bold text-dark">Company Info</h5>
                <ul className="list-unstyled">
                  <li><a className="text-dark text-decoration-none" href="#">About Us</a></li>
                  <li><a className="text-dark text-decoration-none" href="#">Affiliate</a></li>
                  <li><a className="text-dark text-decoration-none" href="#">Fashion Blogger</a></li>
                </ul>
              </Col>
              <Col lg={2} md={6} className="mb-3">
                <h5 className="fw-bold text-dark">Help & Support</h5>
                <ul className="list-unstyled">
                  <li><a className="text-dark text-decoration-none" href="#">Shipping Info</a></li>
                  <li><a className="text-dark text-decoration-none" href="#">Refunds</a></li>
                  <li><a className="text-dark text-decoration-none" href="#">How to Order</a></li>
                  <li><a className="text-dark text-decoration-none" href="#">How to Track</a></li>
                  <li><a className="text-dark text-decoration-none" href="#">Size Guides</a></li>
                </ul>
              </Col>
              <Col lg={2} md={6} className="mb-3">
                <h5 className="fw-bold text-dark">Customer Care</h5>
                <ul className="list-unstyled">
                  <li><a className="text-dark text-decoration-none" href="#">Contact Us</a></li>
                  <li><a className="text-dark text-decoration-none" href="#">Payment Methods</a></li>
                  <li><a className="text-dark text-decoration-none" href="#">Bonus Points</a></li>
                </ul>
              </Col>
              <Col lg={4} md={6} className="mb-3">
                <h5 className="fw-bold text-dark">Signup For The Latest News</h5>
                <Form>
                  <Form.Control type="email" placeholder="Enter Email" className="mb-3" />
                </Form>
                <p className="text-dark d-flex align-items-center">
                  <FaPhoneAlt className="me-2" /> +3930219390
                </p>
                <p className="text-dark d-flex align-items-center">
                  <FaEnvelope className="me-2" /> something@gmail.com
                </p>
              </Col>
            </Row>
            <div className="border-top border-3 mt-4"></div>
            <div className="d-flex gap-4 mt-3 justify-content-center">
              <a href="https://facebook.com" className="text-dark fs-3"><FaFacebook /></a>
              <a href="https://instagram.com" className="text-dark fs-3"><FaInstagram /></a>
              <a href="https://twitter.com" className="text-dark fs-3"><FaTwitter /></a>
              <a href="https://linkedin.com" className="text-dark fs-3"><FaLinkedin /></a>
            </div>
          </Container>
        </section>
      </section>
    </>
  );
};

export default CtaCarousel;

