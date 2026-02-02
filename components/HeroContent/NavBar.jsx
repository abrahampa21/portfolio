import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="name">
          <img src="../../../public/img/logo.png" alt="Avatar" />
          <h2>ABRAHAM PECH</h2>
        </div>
        <ul className="links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about-me">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>

        <div className="toggle">
          <img src="../../../public/img/bars.png" alt="Bars" />
        </div>

        <ul className="menu-responsive">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about-me">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
