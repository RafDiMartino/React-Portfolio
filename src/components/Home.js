import "../App.css"
import "./Home.css"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

 

function HeroSection() {
    return (
        <main className="heroSection">
            <div className="nameAboutWrapper">
                <h1 className="fullName">
                    <p className="name">RAFFAELE</p>
                    <p className="surname">DI MARTINO</p>
                </h1>
                <div className="aboutWrapper">
                    <p className="about">Frontend Developer with an Art & Design background </p>
                </div>
            </div>
            <div className="socialWrapper">
                <a href="https://www.linkedin.com/in/raffaele-di-martino/" target="_blank" rel="noreferrer" className="social linkedin" aria-label="linkedin"><FaLinkedinIn /></a>
                <a href="https://github.com/RafDiMartino/" target="_blank" rel="noreferrer" className="social github" aria-label="github"><FaGithub /></a>
            </div>
        </main>
    )
}

export default HeroSection
