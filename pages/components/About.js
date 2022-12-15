import React from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";

function About() {
  return (
    <div>
      {/* About text */}
      <Container className="mt-3 border">
        <Row className="justify-content-md-center text-center">
          <Col>
            <div class="container page-title text-center">
              <h2 class="text-center">About me</h2>
              <span class="title-head-subtitle">
                -- I design and code beautiful things, and I love what I do. --
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      {/* END About text */}

      {/* About info */}
      <Container className="mt-3 border">
        <Row className="justify-content-md-center text-center">
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
      {/* END About info */}
    </div>
  );
}

export default About;
