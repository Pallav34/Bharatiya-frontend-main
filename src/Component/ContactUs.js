

import React from 'react';
import "./ContactUsStyles.css";

function ContactUs() {
  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/+919932908262?text=Hi,%20I%20am%20interested';
  };

  return (
    <div className="container">
      <div>
        <h2>Email Us</h2>
        <p>
          <a className="email" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCDCHXsXBGfSPfnmlwwFRhCRlNbgDNflDbfPtnkJJZPbDmzkkJjJCszjQcrXLQxrGFBHgV">unblueconsultation@gmail.com</a>
        </p>
        <br/>
        <h2>Contact via Whatsapp</h2>
        <button onClick={handleWhatsAppClick}>
          Send Message
        </button>
        <br/>
        {/* <h2>Feedback Form</h2>
        <button onClick={() => window.location.href='/';}>
          Contact Form
        </button> */}
        <p>
          <br/>
          Feel free to get in touch with us if you have any questions or feedback.
        </p>
      </div>
      <div className="ico">
        {/* <a href="/">
          <i className="fa-brands fa-facebook-square" />
        </a>
        <a href="/">
          <i className="fa-brands fa-twitter-square" />
        </a> */}
        <a href="https://www.linkedin.com/company/bharatiya23/">
          <i className="fa-brands fa-linkedin" />
        </a>
        {/* <a href="/">
          <i className="fa-brands fa-instagram-square" />
        </a> */}
      </div>
    </div>
  );
}

export default ContactUs;

