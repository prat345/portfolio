import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

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
    path: "/images/s10.png",
  },
  {
    name: "React",
    path: "/images/s11.png",
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
    name: "Postman",
    path: "https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png",
  },
  {
    name: "Figma",
    path: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png?20190122182216",
  },
];

export default function Skill() {
  return (
    <section id="skill" className="text-center p-4">
      <div className="skill-container">
        <h1 className="mb-4">Skills</h1>
        <Row className="justify-content-center">
          <Col sm={12} md={8}>
            <ul className="d-flex p-0 justify-content-evenly flex-wrap">
              {skills.map((skill, i) => (
                <li className="img-sm-container">
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
