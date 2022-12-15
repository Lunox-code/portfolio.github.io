import React from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Image src="../../assets/wave.svg" />
      <Container className="mt-3">
        <Row
          xs={1}
          md={2}
          className="d-flex align-items-center justify-content-center text-center border"
        >
          <Col>
            <p>Hello World,</p>
            <p>I am Moisés Obando</p>
            <p>I am Creative. I Love to Develop. I Love Design.</p>

            {/* <Button variant="primary" size="sm">
                DOWNLOAD MY CV
              </Button> */}
          </Col>
          <Col>
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
