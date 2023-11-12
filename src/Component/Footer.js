import "./FooterStyles.css";
const currentDate = new Date();
const year = currentDate.getFullYear();
function Footer() {
  return (
    <>
      
        <div className="footer-content">
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
          <p>
            &#169; Bhartiya powerby <a href="">Unblue</a> {year}
          </p>
        </div>
    </>
  );
}

export default Footer;
