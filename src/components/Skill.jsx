import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { v4 as uuid } from "uuid";

const skills = [
  {
    name: "HTML5",
    path: "/images/s3.png",
  },
  {
    name: "CSS3",
    path: "/images/s2.png",
  },
  {
    name: "Javascript",
    path: "/images/s4.png",
  },
  {
    name: "Python",
    path: "/images/s5.png",
  },
  {
    name: "Django",
    path: "/images/s6.png",
  },
  {
    name: "Node",
    path: "/images/s9.png",
  },
  {
    name: "Express",
    path: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
  },
  {
    name: "React",
    path: "/images/s11.png",
  },
  {
    name: "Tailwind",
    path: "/images/s12.svg",
  },
  {
    name: "MySQL",
    path: "/images/s8.png",
  },
  {
    name: "MongoDB",
    path: "/images/s1.png",
  },
  {
    name: "Git",
    path: "/images/s7.png",
  },
  {
    name: "Figma",
    path: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png?20190122182216",
  },
];

export default function Skill() {
  return (
    <section id="skill" className="skill text-center">
      <h1 className="mb-4">Skills</h1>
      <div className="skill-container">
        <Row className="justify-content-center">
          <Col sm={12} md={8}>
            <ul className="d-flex p-0 justify-content-evenly flex-wrap">
              {skills.map((skill, i) => (
                <li className="img-sm-container" key={uuid()}>
                  <img
                    className="img-small"
                    src={skill.path}
                    alt={skill.name}
                  />
                  <p className="mt-2">
                    <span className="skill-name">{skill.name}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  );
}
