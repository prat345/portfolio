import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { v4 as uuid } from "uuid";
import Sendmail from "./Sendmail";
import contactImg from "../assets/images/contact-img.png";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col xs={6} md={3} className="d-flex align-items-center">
            <img src={contactImg} alt="contact" />
          </Col>
          <Col md={6}>
            <Sendmail />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
