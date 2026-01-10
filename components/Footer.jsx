const Footer = () => {
  return (
    <footer>
      <div className="text">
        <p>
          This portfolio was built with React and other libraries. Source code
          available on Github: <br></br> https://github.com/abrahampa21/portfolio 
        </p>
        <img src="#" alt="React" />
      </div>
      <div className="contact">
        <p>Contact</p>
        <div className="icons">
            <a><img src="#" alt="LinkedIn" /></a>
            <a><img src="#" alt="Github" /></a>
            <a><img src="#" alt="Gmail" /></a>
        </div>
      </div>
      <img src="#" alt="Abraham Pech" />
      <p className="copyright">All rights reserved AAPA &copy; 2026</p>
    </footer>
  );
};

export default Footer;
