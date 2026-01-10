import HeroContent from "./components/HeroContent";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

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