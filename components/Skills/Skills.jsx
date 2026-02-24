import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="programming skills-container">
        <h3>Tech skills</h3>
        <div className="content">
          <div className="skill">
            <img src="/img/skills/html.webp" alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <img src="/img/skills/css.webp" alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <img src="/img/skills/js.png" alt="JS" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <img src="/img/skills/php.png" alt="PHP" />
            <p>PHP</p>
          </div>
          <div className="skill">
            <img src="/img/skills/mysql.webp" alt="MySQL" />
            <p>MySQL</p>
          </div>
          <div className="skill">
            <img src="/img/skills/java.svg" alt="Java" />
            <p>Java</p>
          </div>
          <div className="skill">
            <img src="/img/skills/cpp.png" alt="C++" />
            <p>C++</p>
          </div>
        </div>
      </div>
      <div className="frameworks-languages skills-container">
        <div className="framework-div">
          <h3>Frameworks/libraries</h3>
          <div className="content">
            <div className="skill">
              <img
                src="/img/skills/bootstrap.png"
                alt="Bootstrap"
              />
              <p>Bootstrap</p>
            </div>
            <div className="skill">
              <img
                src="/img/skills/tailwind.svg"
                alt="Tailwind"
              />
              <p>Tailwind</p>
            </div>
            <div className="skill">
              <img
                src="/img/skills/laravel.jfif"
                alt="Laravel"
              />
              <p>Laravel</p>
            </div>
            <div className="skill">
              <img src="/img/skills/react.webp" alt="React" />
              <p>React</p>
            </div>
            <div className="skill">
              <img src="/img/skills/nodejs.png" alt="Node.js" />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <img src="/img/skills/vitejs.png" alt="Vite.js" />
              <p>Vite.js</p>
            </div>
          </div>
        </div>
        <div className="languages">
          <h3>Language skills</h3>
          <div className="content">
            <div className="skill">
              <img src="/img/skills/mexico.webp" alt="React" />
              <p>Spanish C2 (Native Language)</p>
            </div>
            <div className="skill">
              <img src="/img/skills/english.svg" alt="Node.js" />
              <p>English C2</p>
            </div>
            <div className="skill">
              <img
                src="/img/skills/italian.webp"
                alt="Vite.js"
              />
              <p>Italian A2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="social skills-container">
        <h3>Soft skills</h3>
        <div className="content">
          <div className="skill">
            <img src="/img/skills/teamwork.png" alt="Teamwork" />
            <p>Teamwork</p>
          </div>
          <div className="skill">
            <img
              src="/img/skills/leadership.jpg"
              alt="Leadership"
            />
            <p>Leadership</p>
          </div>
          <div className="skill">
            <img
              src="/img/skills/communication.png"
              alt="Communication"
            />
            <p>Communication</p>
          </div>
          <div className="skill">
            <img
              src="/img/skills/ei.png"
              alt="Emotional Intelligence"
            />
            <p>Emotional Intelligence</p>
          </div>
          <div className="skill">
            <img
              src="/img/skills/organization.png"
              alt="Organization"
            />
            <p>Organization</p>
          </div>
          <div className="skill">
            <img
              src="/img/skills/tbs.png"
              alt="Troubleshooting"
            />
            <p>Troubleshooting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
