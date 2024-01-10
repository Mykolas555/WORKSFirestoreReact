import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import fire from "../../images/1175544_firebase_google_icon.svg";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} lg={6} className="d-flex align-items-center justify-content-center">
          <h1>Firebase aplikacija su React</h1>
        </Col>
        <Col sm={12} lg={6} className="d-flex align-items-center justify-content-center">
          <img src={fire} alt="fire" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
