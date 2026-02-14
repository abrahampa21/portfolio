import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="text">
          <p>
            This portfolio was built with React and other libraries. Source code
            available on Github: <br></br>{" "}
            <a href="https://github.com/abrahampa21/portfolio" target="_blank">
              https://github.com/abrahampa21/portfolio
            </a>
          </p>
          <img src="/img/skills/react.webp" alt="React" />
        </div>
        <div className="contact">
          <div className="icons">
            <p>Contact</p>
            <div className="icons-media">
              <a>
                <img src="../../../public/img/linkedin.png" alt="LinkedIn" />
              </a>
              <a>
                <img src="../../../public/img/github.png" alt="Github" />
              </a>
              <a>
                <img src="../../../public/img/gmail.webp" alt="Gmail" />
              </a>
            </div>
          </div>
          <img
            src="/img/logo.webp"
            className="logo-ap"
            alt="Abraham Pech"
          />
        </div>
      </div>
      <p className="copyright">All rights reserved Abraham Pech &copy; 2026</p>
    </footer>
  );
};

export default Footer;
