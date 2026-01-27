import HeroContent from "./components/HeroContent/HeroContent";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import "./index.css";

const App = () => {
    return(
        <div className="content">
            <HeroContent/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Footer/>            
        </div>
    )
}

export default App;