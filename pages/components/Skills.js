import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function Skills() {
  return (
    <div>
      <Container className="mt-3 mb-3 justify-content-md-center text-center border">
        <Row className="mt-5 mb-5">
          <Col>
            <h2>Front End Skills</h2>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <p>HTML 5</p>
            <ProgressBar animated now={45} variant="progressBar" />
            <br></br>
            <p>JavaScript</p>
            <ProgressBar animated now={45} variant="progressBar" />
            <br></br>
            <p>CSS 3</p>
            <ProgressBar animated now={45} variant="progressBar" />
            <br></br>
          </Col>
          <Col sm>
            <p>React JS</p>
            <ProgressBar animated now={45} variant="progressBar" />
            <br></br>
            <p>React-Bootstrap</p>
            <ProgressBar animated now={45} variant="progressBar" />
            <br></br>
            <p>JSON</p>
            <ProgressBar animated now={45} variant="progressBar" />
            <br></br>
          </Col>
          <Col sm>
            <p>GitHub</p>
            <ProgressBar animated now={45} variant="progressBar" />
            <br></br>
            <p>Figma</p>
            <ProgressBar animated now={45} variant="progressBar" />
            <br></br>
            <p>Photoshop</p>
            <ProgressBar animated now={45} variant="progressBar" />
            <br></br>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
