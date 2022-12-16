import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div>
      <Image src="../../assets/wave.svg" />
      <Container className="mt-3 mb-3">
        <Row
          xs={1}
          md={2}
          className="d-flex align-items-center justify-content-center text-center border"
        >
          <Col className="mb-4">
            <p>Hello World,</p>
            <p>I am Moisés Obando</p>
            <p>I am Creative. I Love to Develop. I Love Design.</p>
            <a href="https://www.linkedin.com/in/lunox/" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: 30, color: "white" }}
                className="text-center p-2"
              />
            </a>
            <a href="https://github.com/Lunox-code" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ fontSize: 30, color: "white" }}
                className="text-center p-2"
              />
            </a>
            <a
              href="https://www.instagram.com/lunox.code/?hl=en"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: 30, color: "white" }}
                className="text-center p-2"
              />
            </a>
            <a href="https://web.facebook.com/lunox.moiso/" target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: 30, color: "white" }}
                className="text-center p-2"
              />
            </a>
          </Col>

          <Col className="mb-3">
            <Image
              src="../../assets/photo.jpeg"
              width={350}
              roundedCircle
              responsive
              thumbnail
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
