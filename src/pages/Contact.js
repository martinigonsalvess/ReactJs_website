import React from "react";
import foto6 from "../assets/foto6.jpg";

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{ background: `url(${foto6})` }}></div>
      <div className="rightSide">
        <h1> Contact us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter your email" type="email" />

          <label htmlFor="message">Message</label>
          <textarea></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
