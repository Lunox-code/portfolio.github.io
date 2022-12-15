import React from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";

function About() {
  return (
    <div>
      {/* About text */}
      <Container className="mt-5 border">
        <Row className="justify-content-md-center text-center">
          <Col>
            <div class="container page-title text-center">
              <h2 class="text-center">About me</h2>
              <p>
                -- I design and code beautiful things, and I love what I do. --
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* END About text */}

      {/* About info */}
      <Container className="border">
        <Row xs={1} md={2} className="justify-content-md-center">
          <Col className="text-center">
            <Image src="../../assets/dev.gif" style={{ height: 320 }}></Image>
          </Col>
          <Col>
            {/* FIX CENTER TEXT MOBILE */}
            <Row xs={1} md={2} className="mt-5 mb-5">
              {/* END FIX CENTER TEXT MOBILE */}
              <Col>
                <p>Name: Moises Obando</p>
                <p>Age: 29 years old</p>
                <p>Languages: English, Spanish</p>
                <p>Experience: 3 years</p>
              </Col>
              <Col>
                <p>Phone: +506 84025666</p>
                <p>Email: Lunox.code@gmail.com</p>
                <p>Nationality: Costa Rican</p>
                <p>Nationality: Costa Rican</p>
              </Col>
            </Row>
            <Container className="text-center">
              <Button variant="primary" size="lg">
                DOWNLOAD MY CV
              </Button>
            </Container>
          </Col>
        </Row>
      </Container>
      {/* END About info */}
    </div>
  );
}

export default About;
