import { FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";


function HeroSection() {
    return (
        <div className="heroSection">
            <div className="fullName">
                <p className="name">RAFFAELE</p>
                <p className="surname">DI MARTINO</p>
            </div>
            <div className="aboutWrapper">
                <p className="about">Frontend Web Developer with an Art & Design background </p>
            </div>
            <div className="socialWrapper">
                <FaLinkedinIn className="social"/> 
                <FaGithub className="social"/>
                <FaCodepen className="social"/>
            </div>
        </div>
    )
}

export default HeroSection
