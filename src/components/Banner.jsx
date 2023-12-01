import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Banner() {
  const onDownload = () => {
    fetch("/files/resume.pdf")
      .then((response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);

          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "resume.pdf";
          alink.click();
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <section id="banner">
      <Container>
        <Row>
          <Col md={8} className="my-auto">
            <h1 className="mb-3">Prat Prasertsup</h1>
            <p>
              Hi, I am a newly graduated engineer who has passion for developing
              web applications and programming. I have practiced about web
              development through self learning, online courses and my self
              projects. I am seekingfor an opportunity to work as a front-end or
              full-stack developer to create professional websites
              whiledeveloping new skills and becoming a good team player.
            </p>
            <p>
              <button className="btn btn-outline-light" onClick={onDownload}>
                Download Resume
              </button>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
