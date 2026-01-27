import NavBar from "./NavBar";
import "./HeroContent.css";

const HeroContent = () => {
  return (
    <>
      <NavBar />

      <section className="hero-content">
        <main className="div-content">
          <div className="content">
            <h3>Hello & Welcome</h3>
            <h1>I am Software Engineer</h1>
            <h4>Building clean and scalable web applications</h4>
          </div>

          <a href="#" className="download-cv">
            Download CV
          </a>

          <div className="to-next"></div>
        </main>
      </section>
    </>
  );
};

export default HeroContent;
