import "../App.css"
import "./Home.css"
import { FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
 

function HeroSection() {
    return (
        <div className="heroSection">
            <div className="nameAboutWrapper">
                <div className="fullName">
                    <p className="name">RAFFAELE</p>
                    <p className="surname">DI MARTINO</p>
                </div>
                <div className="aboutWrapper">
                    <p className="about">Frontend Web Developer with an Art & Design background </p>
                </div>
            </div>
            <div className="socialWrapper">
                <a href="https://www.linkedin.com/in/raffaele-di-martino/" target="_blank" rel="noreferrer" className="social linkedin"><FaLinkedinIn /></a>
                <a href="https://github.com/RafDiMartino/" target="_blank" rel="noreferrer" className="social github"><FaGithub /></a>
                <a href="https://codepen.io/R4F" target="_blank" rel="noreferrer" className="social codepen"><FaCodepen /></a>
                <a href="mailto:r.dimartino.uk@gmail.com" className="social email"><MdMailOutline /></a>
            </div>
        </div>
    )
}

export default HeroSection
