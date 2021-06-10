import "../App.css"
import "./Home.css"
import { FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";

 

function HeroSection() {
    return (
        <main className="heroSection">
            <div className="nameAboutWrapper">
                <h1 className="fullName">
                    <p className="name">RAFFAELE</p>
                    <p className="surname">DI MARTINO</p>
                </h1>
                <div className="aboutWrapper">
                    <p className="about">Frontend Web Developer with an Art & Design background </p>
                </div>
            </div>
            <div className="socialWrapper">
                <a href="https://www.linkedin.com/in/raffaele-di-martino/" target="_blank" rel="noreferrer" className="social linkedin" aria-label="linkedin"><FaLinkedinIn /></a>
                <a href="https://github.com/RafDiMartino/" target="_blank" rel="noreferrer" className="social github" aria-label="github"><FaGithub /></a>
                <a href="https://codepen.io/R4F" target="_blank" rel="noreferrer" className="social codepen" aria-label="codepen"><FaCodepen /></a>
            </div>
        </main>
    )
}

export default HeroSection
