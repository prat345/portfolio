import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { v4 as uuid } from "uuid";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section className="project" id="project">
      <Container>
        <h1 className="mb-4 text-center">Projects</h1>
        <Row className="d-flex flex-wrap">
          {projects.map((project, i) => {
            return (
              <Col lg={6} className="d-flex mb-4" key={i}>
                <Card>
                  <Carousel key={uuid()}>
                    {project.image.map((image, i) => {
                      return (
                        <Carousel.Item interval={5000} key={i}>
                          <img
                            className="d-block w-100"
                            src={image.imgPath}
                            alt={image.imgNumber}
                          />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                  <Card.Body className="text-center">
                    <Card.Title className="m-0">
                      <h5 className="mb-3">{project.title}</h5>
                    </Card.Title>
                    <Card.Text>
                      {/* <p className="text-small font-italic">{project.type}</p> */}
                      <p className="d-flex justify-content-center">
                        {" "}
                        {/* {project.stacks.map((stack) => {
                            return (
                              <span className="stack-name" key={uuid()}>
                                {stack}
                              </span>
                            );
                          })} */}
                        <Link
                          type="button"
                          className="btn btn-warning mx-2"
                          target="_blank"
                          to={project.github}
                        >
                          Github
                        </Link>
                        <Link
                          type="button"
                          className="btn btn-outline-primary mx-2"
                          target="_blank"
                          to={project.demo}
                        >
                          Live Demo
                        </Link>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
