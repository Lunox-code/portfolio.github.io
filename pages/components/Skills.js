import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function Skills() {
  const v60 = 60;
  const v65 = 65;
  const v70 = 70;
  const v75 = 75;
  const v80 = 80;
  const v85 = 85;
  const v90 = 90;

  return (
    <div>
      <Container className=" justify-content-md-center text-center">
        <Row>
          <Col
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="mb-5 mt-5"
          >
            <h2>
              <b>
                Front End <span className="skills">Skills</span>
              </b>
            </h2>
          </Col>
        </Row>
        <Row className="mb-5 mt-5">
          <Col sm>
            <p>HTML 5</p>
            <div data-aos="fade-up" data-aos-duration="1000">
              <ProgressBar
                animated
                now={v85}
                label={`${v85}%`}
                variant="progressBar"
              />
            </div>
            <br></br>
            <p>JavaScript</p>
            <div data-aos="fade-up" data-aos-duration="1200">
              <ProgressBar
                animated
                now={v60}
                label={`${v60}%`}
                variant="progressBar"
              />
            </div>
            <br></br>
            <p>CSS 3</p>
            <div data-aos="fade-up" data-aos-duration="1400">
              <ProgressBar
                animated
                now={v60}
                label={`${v60}%`}
                variant="progressBar"
              />
            </div>
            <br></br>
          </Col>
          <Col sm>
            <p>React JS</p>
            <div data-aos="fade-up" data-aos-duration="1600">
              <ProgressBar
                animated
                now={v65}
                label={`${v65}%`}
                variant="progressBar"
              />
            </div>
            <br></br>
            <p>React-Bootstrap</p>
            <div data-aos="fade-up" data-aos-duration="1800">
              <ProgressBar
                animated
                now={v75}
                label={`${v75}%`}
                variant="progressBar"
              />
            </div>
            <br></br>
            <p>JSON</p>
            <div data-aos="fade-up" data-aos-duration="2000">
              <ProgressBar
                animated
                now={v70}
                label={`${v70}%`}
                variant="progressBar"
              />
            </div>
            <br></br>
          </Col>
          <Col sm>
            <p>GitHub</p>
            <div data-aos="fade-up" data-aos-duration="2200">
              <ProgressBar
                animated
                now={v80}
                label={`${v80}%`}
                variant="progressBar"
              />
            </div>
            <br></br>
            <p>Figma</p>
            <div data-aos="fade-up" data-aos-duration="2400">
              <ProgressBar
                animated
                now={v75}
                label={`${v75}%`}
                variant="progressBar"
              />
            </div>
            <br></br>
            <p>Photoshop</p>
            <div data-aos="fade-up" data-aos-duration="2600">
              <ProgressBar
                animated
                now={v70}
                label={`${v70}%`}
                variant="progressBar"
              />
            </div>
          </Col>
        </Row>
        <br></br>
        <hr></hr>
      </Container>
    </div>
  );
}

export default Skills;
