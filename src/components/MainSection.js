import "../App.css"
import "./MainSection.css"
import { FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";


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
                <FaLinkedinIn className="social linkedin"/> 
                <FaGithub className="social github"/>
                <FaCodepen className="social codepen"/>
            </div>
        </div>
    )
}

export default HeroSection
