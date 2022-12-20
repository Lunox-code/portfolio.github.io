import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function Skills() {
  return (
    <div>
      <Container className="mt-3 mb-5 justify-content-md-center text-center border">
        <Row className="mt-3 mb-5">
          <Col>
            <h2>Front End Skills</h2>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col sm>
            <p>HTML 5</p>
            <div data-aos="fade-up" data-aos-duration="1000">
              <ProgressBar animated now={45} variant="progressBar" />
            </div>
            <br></br>
            <p>JavaScript</p>
            <div data-aos="fade-up" data-aos-duration="1200">
              <ProgressBar animated now={45} variant="progressBar" />
            </div>
            <br></br>
            <p>CSS 3</p>
            <div data-aos="fade-up" data-aos-duration="1400">
              <ProgressBar animated now={45} variant="progressBar" />
            </div>
            <br></br>
          </Col>
          <Col sm>
            <p>React JS</p>
            <div data-aos="fade-up" data-aos-duration="1600">
              <ProgressBar animated now={45} variant="progressBar" />
            </div>
            <br></br>
            <p>React-Bootstrap</p>
            <div data-aos="fade-up" data-aos-duration="1800">
              <ProgressBar animated now={45} variant="progressBar" />
            </div>
            <br></br>
            <p>JSON</p>
            <div data-aos="fade-up" data-aos-duration="2000">
              <ProgressBar animated now={45} variant="progressBar" />
            </div>
            <br></br>
          </Col>
          <Col sm>
            <p>GitHub</p>
            <div data-aos="fade-up" data-aos-duration="2200">
              <ProgressBar animated now={45} variant="progressBar" />
            </div>
            <br></br>
            <p>Figma</p>
            <div data-aos="fade-up" data-aos-duration="2400">
              <ProgressBar animated now={45} variant="progressBar" />
            </div>
            <br></br>
            <p>Photoshop</p>
            <div data-aos="fade-up" data-aos-duration="2600">
              <ProgressBar animated now={45} variant="progressBar" />
            </div>
            <br></br>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
