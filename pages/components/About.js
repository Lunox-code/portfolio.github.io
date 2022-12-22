import React from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";

function About() {
  return (
    <div>
      {/* About text */}
      <Container>
        <Row className="mb-5 mt-5 justify-content-md-center text-center">
          <Col data-aos="zoom-in" data-aos-duration="2000">
            <h2 class="text-center">
              <b>
                ABOUT <span className="me">ME</span>
              </b>
            </h2>
            <p>
              -- I design and code beautiful things, and I love what I do --
            </p>
          </Col>
        </Row>
        {/* END About text */}

        {/* About info */}
        <Row xs={1} md={2} className="justify-content-md-center">
          <Col className="mb-5 text-center">
            <Image
              src="https://lunox-code.github.io/portfolio.github.io/assets/dev.gif"
              alt=" "
              style={{ height: 350 }}
            ></Image>
          </Col>
          <Col>
            {/* FIX CENTER TEXT MOBILE */}
            <Row xs={1} md={2} className="mt-5 mb-5">
              {/* END FIX CENTER TEXT MOBILE */}
              <Col>
                <p>
                  <b>NAME: </b>
                  <br></br>
                  <span className="info">Moises Obando</span>
                </p>
                <p>
                  <b>AGE: </b>
                  <br></br>
                  <span className="info">29 years old</span>
                </p>
                <p>
                  <b>LANGUAGES: </b>
                  <br></br>
                  <span className="info">English, Spanish</span>
                </p>
                <p>
                  <b>EXPERIENCE: </b>
                  <br></br>
                  <span className="info">3 years</span>
                </p>
                {/* <Button variant="primary" size="lg">
                  DOWNLOAD MY CV
                </Button> */}
              </Col>
              <Col>
                <p>
                  <b>PHONE: </b>
                  <br></br>
                  <span className="info">+506 84025666</span>
                </p>
                <p>
                  <b>EMAIL: </b>
                  <br></br>
                  <span className="info">Lunox.code@gmail.com</span>
                </p>
                <p>
                  <b>NATIONALITY: </b>
                  <br></br>
                  <span className="info">Costa Rican</span>
                </p>
                <p>
                  <b>BASED IN: </b>
                  <br></br>
                  <span className="info">Digital Nomad</span>
                </p>
              </Col>
            </Row>

            <Row className="mb-5">
              {/* END FIX CENTER TEXT MOBILE */}
              <Col>
                <div data-aos="zoom-in-up">
                  <Button variant="cv" size="sm">
                    DOWNLOAD CV
                  </Button>
                </div>
              </Col>
              <Col>
                <div data-aos="zoom-in-up" data-aos-duration="2000">
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
        <hr className="mt-5 mb-5"></hr>
      </Container>
      {/* END About info */}
    </div>
  );
}

export default About;
