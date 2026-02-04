import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="text">
          <p>
            This portfolio was built with React and other libraries. Source code
            available on Github: <br></br>{" "}
            https://github.com/abrahampa21/portfolio
          </p>
          <img src="../../../public/img/skills/react.webp" alt="React" />
        </div>
        <div className="contact">
          <p>Contact</p>
          <div className="icons">
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
          src="../../../public/img/logo.png"
          className="logo-ap"
          alt="Abraham Pech"
        />
      </div>
      <p className="copyright">All rights reserved AAPA &copy; 2026</p>
    </footer>
  );
};

export default Footer;
