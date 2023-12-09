import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { v4 as uuid } from "uuid";
import Sendmail from "./Sendmail";
import Container from "react-bootstrap/esm/Container";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="d-flex align-items-center">
            <div className="container">
              <h2 className="mb-3">Contact</h2>
              <ul>
                <li key={uuid()}>
                  <i className="fa-solid fa-phone"></i>
                  <span>080-062-3302</span>
                </li>
                <li key={uuid()}>
                  <i className="fa-solid fa-envelope"></i>
                  <span>pratprasert@gmail.com</span>
                </li>
                <li key={uuid()}>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>
                    7/29 Moo.10, Khlong Thanon Rd,
                    <br /> Ban Mai, Bang Yai, Nonthaburi 11140
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <Sendmail />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
