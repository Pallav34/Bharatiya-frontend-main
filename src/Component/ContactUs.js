import "./ContactUsStyles.css";

function ContactUs() {
  return (
    <div className="container">
      <div>
        <h2>Email Us</h2>
        <p>
          <a href="/">contactus@gmail.com</a>
        </p>

        <h2>Feedback Form</h2>
        
        <button onclick="window.location.href='/';">
        Contact Form</button>
        
        <p>
          Feel free to get in touch with us if you have any questions or
          feedback.
        </p>
      </div>
      <div className="ico">
        <a href="/">
          <i className="fa-brands fa-facebook-square" />
        </a>
        <a href="/">
          <i className="fa-brands fa-twitter-square" />
        </a>
        <a href="/">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="/">
          <i className="fa-brands fa-instagram-square" />
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
