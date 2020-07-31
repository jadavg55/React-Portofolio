import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col, Button } from "react-bootstrap";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-3">
      <Container fluid={true}>
        <Row className="justify-content-between p-3 ">
          <Col className="p-0 my-2">
            To get in touch with me about a potential project, please contact
            me.
          </Col>
          <Col className="p-0 my-2">
            <a href='https://www.linkedin.com/in/jadavg55/'><FaLinkedin className="social-icons" size="2rem" /></a>
            <a href='https://www.instagram.com/jadav.g/'><FaInstagram className="social-icons" size="2rem" /></a>
            <a href='https://www.facebook.com/jadav.gautam'><FaFacebookSquare className="social-icons" size="2rem" /></a>
          </Col>
          <Col className="p-0 d-flex justify-content-end">
            <a href="contact">
              <Button variant="outline-primary" size="lg">
                Email Me
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
