const NavBar = () => {
    return(
        <header>
            <nav>
                <div className="name">
                    <img src="" alt="Person" />
                    <h2>ABRAHAM PECH</h2>
                </div>
                <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;