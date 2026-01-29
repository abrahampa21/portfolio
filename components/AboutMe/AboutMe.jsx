import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="div-content">
        <div className="content">
          <div className="titles">
            <h2>ABOUT ME</h2>
            <h3>Who am I?</h3>
          </div>
          <div className="div-text">
            <p className="text first-text">
              I am a Programming Engineering and Webmaster student, currently
              focused on becoming a Full Stack Developer. Although I am still
              pursuing my academic studies, I have worked on several academic
              and personal projects that have allowed me to gain hands-on
              experience in building functional and efficient applications.
            </p>
            <p className="text second-text">
              My professional goal is to join a development team where I can
              contribute my skills, continue learning, and grow as a software
              developer. I am passionate about solving problems through code,
              applying best practices, and creating solutions that deliver real
              value. This website showcases a selection of my projects to
              demonstrate my abilities, commitment, and approach to development.
            </p>
          </div>
        </div>
        <img src="../../../public/img/ap.jpg" alt="Abraham Pech" />
      </div>
    </section>
  );
};

export default AboutMe;
