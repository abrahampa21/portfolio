import HeroContent from "./components/HeroContent/HeroContent";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import "./index.css";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    },[]);

    if(loading){
        return <Loader/>
    }
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