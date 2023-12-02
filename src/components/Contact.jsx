import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="mb-3">Contact</h2>
        <ul>
          <li>
            <i class="fa-solid fa-phone"></i>
            <span>080-062-3302</span>
          </li>
          <li>
            <i class="fa-solid fa-envelope"></i>
            <span>pratprasert@gmail.com</span>
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i>
            <span>
              7/29 Moo.10, Khlong Thanon Rd, Ban Mai, <br />
              Bang Yai, Nonthaburi 11140
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
