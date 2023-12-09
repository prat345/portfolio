import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { v4 as uuid } from "uuid";

const projects = [
  {
    title: "Dashboard for Autonomous Vehicle Testing",
    image: [
      {
        imgNumber: "1",
        imgPath: "/images/p1-1.png",
      },
      {
        imgNumber: "2",
        imgPath: "/images/p1-2.png",
      },
      {
        imgNumber: "3",
        imgPath: "/images/p1-3.png",
      },
      {
        imgNumber: "4",
        imgPath: "/images/p1-4.png",
      },
    ],
    description: `An interactive dashboard summarizing data of vehicle testing.
     Allow users to view the overall or individual test data,
     query incident video, record test log and manage data in database.
      `,
    demo: "https://incident-dashboard-clhw.onrender.com/",
    stacks: ["Django", "MongoDB"],
  },
  {
    title: "Amazon Clone MERN-Stack",
    image: [
      {
        imgNumber: "1",
        imgPath: "/images/p2-1.png",
      },
      {
        imgNumber: "2",
        imgPath: "/images/p2-2.png",
      },
      {
        imgNumber: "3",
        imgPath: "/images/p2-3.png",
      },
      {
        imgNumber: "4",
        imgPath: "/images/p2-4.png",
      },
      {
        imgNumber: "5",
        imgPath: "/images/p2-5.png",
      },
      {
        imgNumber: "6",
        imgPath: "/images/p2-6.png",
      },
    ],
    description: `An e-commerce website like Amazon.com.
    Users can search for items, 
    add to cart, create an order, create account, sign in, sign out, make payment, and track order status etc.`,
    demo: "https://amazon-clone-d9pc.onrender.com/",
    stacks: ["Node", "Express", "React", "MongoDB"],
  },
];
export default function Projects() {
  return (
    <section className="project" id="project">
      <Container>
        <h1 className="mb-4 text-center">Projects</h1>
        <Row className="d-flex flex-wrap">
          {projects.map((project, i) => {
            return (
              <Col md={6} className="d-flex mb-4" key={i}>
                <Card>
                  <Link to={project.demo} target="_blank">
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
                      <Card.Title>
                        <h5>{project.title}</h5>
                      </Card.Title>
                      <Card.Text>
                        <p>{project.description}</p>
                        <p>
                          {" "}
                          {project.stacks.map((stack) => {
                            return (
                              <span className="stack-name" key={uuid()}>
                                {stack}
                              </span>
                            );
                          })}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
