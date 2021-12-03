import "../components/section-title/section-title.css"
import { SiReact } from "react-icons/si"
import SectionTitle from "../components/section-title/SectionTitle"
import "../styles/projects.css"
import { FaGithub } from "react-icons/fa"
import Card from "../components/card/Card"
import Quote from "../assets/react-projects-imgs/quote-gen.png"
import CounterApp from "../assets/react-projects-imgs/counter-app.PNG"
import ReactPortfolio from "../assets/react-projects-imgs/react-portfolio.PNG"
import WorkInProgress from "../assets/react-projects-imgs/WorkInProgress3.jpg"
import TaskManager from "../assets/react-projects-imgs/task-manager.PNG"
import WeatherApp from "../assets/react-projects-imgs/weather-app.PNG"
import ReactLab from "../assets/react-projects-imgs/react-lab.PNG"
import Duplex from "../assets/react-projects-imgs/duplexValThorens.png"


function ReactProjects() {
    return (
        <div className="wrapper">
            <SectionTitle 
                icon1={<SiReact />}
                title="PROJECTS"
            />
            <div className="projects-container">
                <Card
                    imageUrl={Duplex}
                    title="Duplex Val Thorens Website"
                    description="Website for a private apartment renting business in a French Alps ski resort - Made with Next.js, focusing on SEO and Internationalisation"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/duplex-val-thorens-nextjs" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://www.duplexvalthorens.com"}
                />
                <Card
                    imageUrl={ReactLab}
                    title="Laboratorio Creativo Website"
                    description="Website for an artisan who customises shoes, candles and more - Made with React and Firebase"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/creative-lab/tree/master" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://www.laboratoriocreativo.net"}
                />
                <Card
                    imageUrl={WeatherApp}
                    title="Weather App"
                    description="In this Progressive Web App, I fetch data from the openweathermap API using Axios, to display the current weather of the City searched"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/Weather-App/tree/master" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.github.io/Weather-App/"}
                />
                <Card
                    imageUrl={TaskManager}
                    title="Task Manager"
                    description="Progressive Web App, practising with CRUD operations, React Hooks and Material UI"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/task-manager/tree/master" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"http://rafdimartino.github.io/task-manager"}
                />
                <Card
                    imageUrl={ReactPortfolio}
                    title="Portfolio Website"
                    description="Second version of my portfolio, made with React"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/React-Portfolio/tree/master" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.com/"}
                />
                <Card
                    imageUrl={Quote}
                    title="The Art of War Quote Generator"
                    description="My version of the Random Quote Machine Generator. Practicing with React hooks useState, useEffect and fetch data from a gist repositoy"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/the-art-of-war-random-quote-generator/tree/master" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.github.io/the-art-of-war-random-quote-generator/"}
                />
                <Card
                    imageUrl={CounterApp}
                    title="Counter App"
                    description="React counter app. Practicing with react hooks useState and useEffect"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/react-counter-app/tree/master" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.github.io/react-counter-app/"}
                />
            </div>
        </div>
    )
}

export default ReactProjects
