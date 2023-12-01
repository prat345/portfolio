import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hbgToggled, setHbgToggled] = useState(false);

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

  const onUpdateActiveLink = (page) => {
    setActiveLink(page);
  };

  return (
    <div id="home">
      <Navbar
        expand="lg"
        className={
          scrolled
            ? "navbar-dark scrolled"
            : hbgToggled
            ? "navbar-dark hbg-on"
            : "navbar-dark "
        }
      >
        <Container>
          <Navbar.Brand href="#home" className="text-start">
            Prat
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => {
              setHbgToggled(!hbgToggled);
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Summary
              </Nav.Link>
              {/* <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink("education")} >Education</Nav.Link> */}
              <Nav.Link
                href="#skill"
                className={
                  activeLink === "skill" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skill")}
              >
                {" "}
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "project"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("project")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
