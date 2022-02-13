import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Management from "./Management";
import Welcome from "./Welcome";
import "./WebsiteLayOut.css";
const WebsiteLayOut = () => {
  return (
    <div className="layout">
      <Container fluid>
        <Row className="welcomed">
          <div className="overlay-welcome-page">
            <h1>Welcome To K-Garden</h1>
            <p>Bar And Restaurant</p>
          </div>

          <Col>
            <Welcome />
          </Col>
        </Row>

        <Row className="managed">
          <Col>
            <Management />
          </Col>
        </Row>

        <Row>
          <Col className="bg-secondary">
            <p>Gallery</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Accomodation</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Restaurant</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Bar</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Washing Bay</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Leisure</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Offers</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Testimonials</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>About Us</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WebsiteLayOut;
