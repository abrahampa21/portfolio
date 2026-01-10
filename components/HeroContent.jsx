import NavBar from "./NavBar";

const HeroContent = () => {
    return(
        <section className="hero-content">
            <NavBar/>
            <main className="div-content">
                <div className="content">
                    <h3>Hello & Welcome</h3>
                    <h1>I am Software Engineer</h1>
                    <h4>Building clean and scalable web applications</h4>
                </div>

                <a href="#">Download CV</a>

                <div className="to-next"></div>
            </main>
        </section>
    )
}

export default HeroContent;