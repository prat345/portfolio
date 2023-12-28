import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import resume from "../assets/files/resume.pdf";

export default function Banner() {
  const [scrolled, setScrolled] = useState(false);
  const onDownload = () => {
    fetch(resume)
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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(false);
      if (window.scrollY > 50) {
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section id="banner" className={scrolled ? "scrolled banner" : "banner"}>
        <Container>
          <Row>
            <Col md={8} className="my-auto">
              <h1 className="mb-4 title">Prat Prasertsup</h1>
              <p style={{ maxWidth: "600px" }}>
                Hi, I am a newly graduated engineer who wants to be a Front-end
                developer. Passionate in creating functional and visually
                appealing websites.
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
      <div className="background">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        repellat!
      </div>
    </>
  );
}
