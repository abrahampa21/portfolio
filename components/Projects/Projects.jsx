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
          <SplideSlide className="card-slide">
            <img
              src="/img/projects/decori.webp"
              loading="lazy"
              alt="Ticket sale managment project"
            />
            <div className="content">
              <h4>Ticket sales</h4>
              <button href="#" className="see-more">See more</button>
            </div>
          </SplideSlide>
          <SplideSlide className="card-slide">
            <img src="/img/projects/dc.webp" alt="Dulces Cuidados" />
            <div className="content">
              <h4>Dulces Cuidados</h4>
              <button href="" className="see-more">See more</button>
            </div>
          </SplideSlide>
          <SplideSlide className="card-slide">
            <img src="/img/projects/iteslogo.webp" alt="Vocational Test" />
            <div className="content">
              <h4>Vocational Test</h4>
              <button href="#" className="see-more">See more</button>
            </div>
          </SplideSlide>
          <SplideSlide className="card-slide">
            <img src="/img/projects/academix.webp" alt="Academix" />
            <div className="content">
              <h4>Academix</h4>
              <button href="#" className="see-more">See more</button>
            </div>
          </SplideSlide>
          <SplideSlide className="card-slide">
            <img src="/img/projects/codelab.webp" alt="Codelab" />
            <div className="content">
              <h4>CodeLab</h4>
              <button href="#" className="see-more">See more</button>
            </div>
          </SplideSlide>
          <SplideSlide className="card-slide">
            <img src="/img/projects/tiktime.webp" alt="tiktime" />
            <div className="content">
              <h4>Tik-Time</h4>
              <button href="#" className="see-more">See more</button>
            </div>
          </SplideSlide>
          <SplideSlide className="card-slide">
            <img src="/img/projects/encryp.png" alt="Java Encryptor" />
            <div className="content">
              <h4>Java Encryptor</h4>
              <button href="#" className="see-more">See more</button>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default Projects;
