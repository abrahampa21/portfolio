import "./Projects.css";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
import dataProjects from "./ProjectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <h3>Projects</h3>
      <div className="projects">
        {/*Carousel*/}
        <Splide
          className="splide-container"
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            gap: "1.5rem",
            pagination: false,
            arrows: true,
            drag: "free",
            snap: true,
            breakpoints: {
              900: {
                perPage: 2,
              },
              700: {
                perPage: 1,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          {dataProjects.map((proj, index) => (
            <SplideSlide key={index} className="card-slide">
              <img src={proj.image} loading="lazy" alt={proj.title} />
              <div className="content">
                <h4>{proj.title}</h4>
                <button
                  className="see-more"
                  onClick={() => setSelectedProject(proj)}
                >
                  See more
                </button>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/*Modal*/}
      {selectedProject &&(
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedProject(null)}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image}  alt={selectedProject.title} className="modal-image" />
            <p>{selectedProject.description}</p>

            <div className="tech-container">
              {selectedProject.tech.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="modal-buttons">
              <a href={selectedProject.demo || "#"} className="demo-btn">Live Demo</a>
              <a href={selectedProject.github || "#"} className="github-btn" target="_blank">Github</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
