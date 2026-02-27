import "./Skills.css";
import {
  techSkills,
  frameworks,
  languageSkills,
  softSkills,
} from "./SkillsData";

const Skills = () => {
  const renderSkills = (skillsArray) =>
    skillsArray.map((skills,index) => (
      <div className="skill" key={index}>
        <img src={skills.img} alt={skills.name} />
        <p>{skills.name}</p>
      </div>
    ));

  return (
    <section className="skills" id="skills">
      <div className="programming skills-container">
        <h3>Tech skills</h3>
        <div className="content">{renderSkills(techSkills)}</div>
      </div>

      <div className="frameworks-languages skills-container">
        <div className="framework-div">
          <h3>Frameworks/Libraries</h3>
          <div className="content">{renderSkills(frameworks)}</div>
        </div>

        <div className="languages">
          <h3>Language skills</h3>
          <div className="content">{renderSkills(languageSkills)}</div>
        </div>
      </div>

      <div className="social skills-container">
        <h3>Soft skills</h3>
        <div className="content">{renderSkills(softSkills)}</div>
      </div>
    </section>
  );
};

export default Skills;
