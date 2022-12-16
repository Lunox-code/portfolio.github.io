import React from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";

function About() {
  return (
    <div>
      {/* About text */}
      <Container className="mt-3 border">
        <Row className="justify-content-md-center text-center">
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
          <Col className="text-center">
            <Image src="../../assets/dev.gif" style={{ height: 320 }}></Image>
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
                <Button variant="primary" size="sm">
                  DOWNLOAD CV
                </Button>
              </Col>
              <Col>
                <Button
                  href="https://github.com/Lunox-code"
                  target="_blank"
                  variant="light"
                  size="sm"
                >
                  PORTFOLIO
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr></hr>
      </Container>
      {/* END About info */}
    </div>
  );
}

export default About;
