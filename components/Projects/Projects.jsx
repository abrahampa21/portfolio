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
            gap: "1rem",
            pagination: false,
            arrows: true,
            drag: "free",
            snap: true,
            breakpoints:{
              900:{
                perPage: 2,
              },
              450:{
                perpage:1,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img src="/img/projects/decori.webp" loading="lazy" alt="Ticket sale managment project"/>
          </SplideSlide>
          <SplideSlide>
            <img src="image2.jpg" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="image3.jpg" alt="Image 3" />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default Projects;
