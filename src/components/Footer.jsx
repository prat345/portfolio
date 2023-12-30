import React from "react";
import { v4 as uuid } from "uuid";

export default function Footer() {
  return (
    <footer className="container">
      <ul>
        <li key={uuid()}>
          <i className="fa-solid fa-phone"></i>
          <span>080-062-3302</span>
        </li>
        <li key={uuid()}>
          <i className="fa-solid fa-envelope"></i>
          <span>pratprasert@gmail.com</span>
        </li>
        <li key={uuid()}>
          <i className="fa-solid fa-location-dot"></i>
          <span>
            7/29 Moo.10, Khlong Thanon Rd,
            <br /> Ban Mai, Bang Yai, Nonthaburi 11140
          </span>
        </li>
      </ul>
    </footer>
  );
}
