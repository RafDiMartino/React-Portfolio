import "../App.css"
import "../styles/home.css"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import Skills from "../components/skills/Skills"
import Featured from "../components/featured-projects/Featured"
import WorkInProgress from "../assets/react-projects-imgs/WorkInProgress3.jpg"
import Duplex from "../assets/featured-projects-imgs/duplex.png"
import Lab from "../assets/featured-projects-imgs/lab.png"

function Home() {
    return (
        <div className="home-wrapper">
            <div className="heroSection">
                <div className="nameAboutWrapper">
                    <div className="fullName">
                        <p className="name">RAFFAELE</p>
                        <p className="surname">DI MARTINO</p>
                    </div>
                    <div className="aboutWrapper">
                        <p className="about">Frontend Developer with an Art & Design background </p>
                    </div>
                </div>
                <div className="socialWrapper">
                    <a href="https://www.linkedin.com/in/raffaele-di-martino/" target="_blank" rel="noreferrer" className="social linkedin" aria-label="linkedin"><FaLinkedinIn /></a>
                    <a href="https://github.com/RafDiMartino/" target="_blank" rel="noreferrer" className="social github" aria-label="github"><FaGithub /></a>
                </div>
            </div>
            <div className="featured-container">
                <h2>Latest Projects</h2>
                <h3>Here are the most recent websites I have built</h3>
                <div className="featured-wrapper">
                    <Featured 
                        img={Duplex}
                        description="Website for a private apartment renting business in a French Alps ski resort - Made with Next.js, focusing on SEO and Internationalisation"
                        link={"https://www.duplexvalthorens.com/"}
                    />
                    <Featured 
                        img={Lab}
                        description="Website for an artisan who customises shoes, candles and more - Made with React and Firebase"
                        link={"https://www.laboratoriocreativo.net/"}
                    />
                </div>
            </div>
            <Skills />
        </div>
    )
}

export default Home
