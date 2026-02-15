import "./Projects.css";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h3>Projects</h3>
      <div className="projects">
        <Splide
        className="splide-container"
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "1.5rem",
            pagination: false,
            arrows: true,
            drag: "free",
            snap: true,
            breakpoints:{
              900:{
                perPage: 2,
              },
              450:{
                perPage: 1,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide className="card-slide">
            <img src="/img/projects/decori.webp" loading="lazy" alt="Ticket sale managment project"/>
            <div className="content">
              <h4>Ticket sales</h4>
              <a href="#">See more</a>
            </div>
          </SplideSlide>
          <SplideSlide className="card-slide">
            <div className="content">
              <h4>CRUD Program</h4>
              <a href="#">See more</a>
            </div>
          </SplideSlide>
          <SplideSlide className="card-slide">
            <img src="/img/projects/iteslogo.webp" alt="Vocational Test" />
            <div className="content">
              <h4>Vocational Test</h4>
              <a href="#">See more</a>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default Projects;
