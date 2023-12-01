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
            <h1 className="mb-3 title">Prat Prasertsup</h1>
            <p>
              Hi, I am a newly graduated engineer who wants to be a Front-end
              developer.
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
