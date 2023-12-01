import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const projects = [
  {
    title: "Incident Dashboard for Autonomous Vehicle Testing",
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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est voluptate assumenda cumque hic, nulla eos deserunt? Perspiciatis, non eveniet.",
    demo: "https://incident-dashboard-clhw.onrender.com/",
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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est voluptate assumenda cumque hic, nulla eos deserunt? Perspiciatis, non eveniet.",
    demo: "https://amazon-clone-d9pc.onrender.com/",
  },
];
export default function Projects() {
  return (
    <section id="project" className="container">
      <h1 className="mb-3">Projects</h1>
      <Container>
        {projects.map((project, i) => {
          return (
            <Row className="mb-3">
              <Col md={6} className="p-2">
                <div className="img-container">
                  {/* <img src={project.imgPath} alt={project.title} /> */}
                  <Carousel>
                    {project.image.map((image, i) => {
                      return (
                        <Carousel.Item interval={5000}>
                          <img
                            className="d-block w-100"
                            src={image.imgPath}
                            alt={image.imgNumber}
                          />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </div>
              </Col>
              <Col md={6}>
                <h3>
                  <Link to={project.demo} target="_blank">
                    {project.title}
                  </Link>
                </h3>
                <p>{project.description}</p>
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
}
