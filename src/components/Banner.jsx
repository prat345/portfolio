import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Banner() {
  return (
    <div id='banner'>
      <Container>
        <Row>
          <Col md={4} className='my-auto'>
            <img src="/images/s1.png" alt="" />
          </Col>
          <Col md={8} className='my-auto'>
            <h1>Prat Prasertsup</h1>
            <p>Hi, I am a newly graduated engineer who has passion for developing web applications and programming.
               I have practiced about web development through self learning, online courses and my self projects.
              I am seekingfor an opportunity to work as a front-end or full-stack developer to create professional
               websites whiledeveloping new skills and becoming a good team player.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
