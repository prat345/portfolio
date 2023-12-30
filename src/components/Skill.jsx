import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { v4 as uuid } from "uuid";
import { skills } from "../data.js";

export default function Skill() {
  return (
    <section id="skill" className="skill text-center">
      <h1>Skills</h1>
      <div className="skill-container">
        <Row className="justify-content-center">
          <Col sm={12} lg={8}>
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
