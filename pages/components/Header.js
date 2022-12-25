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
import MovingText from "react-moving-text";
import Wave from "react-wavify";

function Header() {
  return (
    <div>
      <Wave
        className="wave"
        fill="url(#gradient)"
        transform="rotate(360)"
        responsive="true"
        options={{
          height: 40,
          amplitude: 40,
          speed: 0.16,
          points: 4,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#222831" />
            <stop offset="90%" stopColor="#222831" />
          </linearGradient>
        </defs>
      </Wave>
      {/* <Image
        src="https://lunox-code.github.io/portfolio.github.io/assets/wave.svg"
        alt=" "
      /> */}
      <Container className="mt-3 mb-5">
        <Row
          xs={1}
          md={2}
          className="d-flex align-items-center justify-content-center text-center"
        >
          <Col>
            <p>HELLO WORLD!</p>
            <span className="iam">
              <b>I AM MOISES OBANDO</b>
            </span>
            <div className="movLetter">
              <MovingText
                type="typewriter"
                dataText={[
                  "I am " + "creative.",
                  "I love to develop.",
                  "I love design.",
                ]}
              />
            </div>
            <div data-aos="zoom-in-right" className="mb-5 mt-5">
              <a
                href="https://www.linkedin.com/in/lunox/"
                alt=" "
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: 40, color: "EEEEEE" }}
                  className="text-center p-2"
                />
              </a>
              <a
                href="https://github.com/Lunox-code"
                alt=" "
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: 40, color: "EEEEEE" }}
                  className="text-center p-2"
                />
              </a>
              <a
                href="https://www.instagram.com/lunox.code/?hl=en"
                alt=" "
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: 40, color: "EEEEEE" }}
                  className="text-center p-2"
                />
              </a>
              <a
                href="https://web.facebook.com/lunox.moiso/"
                alt=" "
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ fontSize: 40, color: "EEEEEE" }}
                  className="text-center p-2"
                />
              </a>
            </div>
          </Col>

          <Col data-aos="fade-up" className="mb-3">
            <Image
              src="https://lunox-code.github.io/portfolio.github.io/assets/photo.jpeg"
              alt=" "
              width={350}
              roundedCircle
              responsive="true"
              thumbnail
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
