import "./FooterStyles.css";
const currentDate = new Date();
const year = currentDate.getFullYear();
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <h3>BHARATIYA</h3>
          <p>two lines for website</p>
          <ul class="socials">
            <li>
              <a href="/">
                <i className="fa-brands fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>
            &#169; Bhartiya powerby <a href="">Unblue</a> {year}
          </p>

          <div class="footer-menu">
            <ul class="f-menu">
              <li>
                <a href="/">Teams</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Terms & Condition</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
