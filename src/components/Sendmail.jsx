import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Sendmail() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5nuuoxt",
        "template_vef81gf",
        form.current,
        "DRogWG_gfWztmJqLv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="container send-mail">
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className="form-group mb-3">
          <label>Message</label>
          <textarea
            name="message"
            className="form-control"
            placeholder="Your Message"
          />
        </div>
        <div className="form-group mb-3">
          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={() => setIsEmailSent(true)}
          >
            Send
          </button>
        </div>
        {isEmailSent && (
          <p>Thank you for contacting me. Please wait for a reply</p>
        )}
      </form>
    </div>
  );
}

export default Sendmail;
