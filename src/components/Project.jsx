import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

const projects = [
  {
    title:'Incident Dashboard for Autonomous Vehicle Testing',
    imgPath:"/images/project1.png",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est voluptate assumenda cumque hic, nulla eos deserunt? Perspiciatis, non eveniet.",
    demo:"https://incident-dashboard-clhw.onrender.com/"
  },
  {
    title:'Amazon Clone MERN-Stack',
    imgPath:"/images/project2.png",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est voluptate assumenda cumque hic, nulla eos deserunt? Perspiciatis, non eveniet.",
    demo:"https://amazon-clone-d9pc.onrender.com/"
  }
]
export default function Projects() {
  return (
    <div id='project' className='container'>
      <h1>Projects</h1>
      <Container>
        {projects.map((project, i) => {
          return(
            <Row className='mb-3'>
              <Col md={6}>
                <img src={project.imgPath} alt={project.title} />
              </Col>
              <Col md={6}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p><Link to={project.demo} target='_blank'>Demo</Link></p>
              </Col>
            </Row>
          )
        }
      )}
      </Container>
    </div>
  )
}
