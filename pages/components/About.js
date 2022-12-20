import React from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";

function About() {
  return (
    <div>
      {/* About text */}
      <Container
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-offset="200"
        className="border"
      >
        <Row
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="mb-5 justify-content-md-center text-center"
        >
          <Col>
            <h2 class="text-center">About me</h2>
            <p>
              -- I design and code beautiful things, and I love what I do --
            </p>
          </Col>
        </Row>
        {/* END About text */}

        {/* About info */}
        <Row xs={1} md={2} className="justify-content-md-center">
          <Col
            data-aos="flip-left"
            data-aos-duration="2000"
            className="mb-5 text-center"
          >
            <Image
              src="https://lunox-code.github.io/portfolio.github.io/assets/dev.gif"
              alt=" "
              style={{ height: 320 }}
            ></Image>
          </Col>
          <Col>
            {/* FIX CENTER TEXT MOBILE */}
            <Row xs={1} md={2} className="mt-3 mb-3">
              {/* END FIX CENTER TEXT MOBILE */}
              <Col>
                <p>Name: Moises Obando</p>
                <p>Age: 29 years old</p>
                <p>Languages: English, Spanish</p>
                <p>Experience: 3 years</p>
                {/* <Button variant="primary" size="lg">
                  DOWNLOAD MY CV
                </Button> */}
              </Col>
              <Col>
                <p>Phone: +506 84025666</p>
                <p>Email: Lunox.code@gmail.com</p>
                <p>Nationality: Costa Rican</p>
                <p>Based in: Digital Nomad</p>
              </Col>
            </Row>

            <Row className="mb-3">
              {/* END FIX CENTER TEXT MOBILE */}
              <Col>
                <div data-aos="zoom-in-up">
                  <Button variant="cv" size="sm">
                    DOWNLOAD CV
                  </Button>
                </div>
              </Col>
              <Col>
                <div data-aos="zoom-in-up" data-aos-duration="1000">
                  <Button
                    href="https://github.com/Lunox-code"
                    target="_blank"
                    variant="light"
                    size="sm"
                  >
                    PORTFOLIO
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="mt-5"></hr>
      </Container>
      {/* END About info */}
    </div>
  );
}

export default About;
