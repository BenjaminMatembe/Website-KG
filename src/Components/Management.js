import pic1 from "../Pictures/profile-pic.jpg";
import pic2 from "../Pictures/profile-pic1.jfif";
import { Container, Row, Col } from "react-bootstrap";
import "./Management.css";
const Management = () => {
  return (
    <div className="management  ">
      <h1 className="management-title">K-Garden Staff</h1>

      <Container  className="package-pics">
        <Row className="text-center">
          <Col>
            <div className="profile-image">
              <img src={pic1} alt="EMMA" />
            </div>
            <div className="names">
              <span>Matembe Benjamin</span>
              <br />
              <span>Director</span>
            </div>
          </Col>

          <Col>
            <div className="profile-image">
              <img src={pic1} alt="EMMA" />
            </div>
            <div className="names">
              <span>Matembe Benjamin</span>
              <br />
              <span>Director</span>
            </div>
          </Col>

          <Col>
            <div className="profile-image">
              <img src={pic1} alt="EMMA" />
            </div>
            <div className="names">
              <span>Matembe Benjamin</span>
              <br />
              <span>Director</span>
            </div>
          </Col>

          <Col>
            <div className="profile-image">
              <img src={pic1} alt="EMMA" />
            </div>
            <div className="names">
              <span>Matembe Benjamin</span>
              <br />
              <span>Director</span>
            </div>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <div className="profile-image">
              <img src={pic2} alt="EMMA" />
            </div>
            <div className="names">
              <span>Matembe Benjamin</span>
              <br />
              <span>Director</span>
            </div>
          </Col>

          <Col>
            <div className="profile-image">
              <img src={pic2} alt="EMMA" />
            </div>
            <div className="names">
              <span>Matembe Benjamin</span>
              <br />
              <span>Director</span>
            </div>
          </Col>

          <Col>
            <div className="profile-image">
              <img src={pic2} alt="EMMA" />
            </div>
            <div className="names">
              <span>Matembe Benjamin</span>
              <br />
              <span>Director</span>
            </div>
          </Col>

          <Col>
            <div className="profile-image">
              <img src={pic2} alt="EMMA" />
            </div>
            <div className="names">
              <span>Matembe Benjamin</span>
              <br />
              <span>Director</span>
            </div>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <div className="profile-image">
              <img src={pic2} alt="EMMA" />
            </div>
            <div className="names">
              <span>Matembe Benjamin</span>
              <br />
              <span>Director</span>
            </div>
          </Col>

          <Col>
            <div className="profile-image">
              <img src={pic2} alt="EMMA" />
            </div>
            <div className="names">
              <span>Matembe Benjamin</span>
              <br />
              <span>Director</span>
            </div>
          </Col>

          <Col>
            <div className="profile-image">
              <img src={pic1} alt="EMMA" />
            </div>
            <div className="names">
              <span>Matembe Benjamin</span>
              <br />
              <span>Director</span>
            </div>
          </Col>

          <Col>
            <div className="profile-image">
              <img src={pic1} alt="EMMA" />
            </div>
            <div className="names">
              <span>Matembe Benjamin</span>
              <br />
              <span>Director</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Management;
