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


function ReactProjects() {
    return (
        <div className="wrapper">
            <SectionTitle 
                icon1={<SiReact />}
                title="PROJECTS"
            />
            <div className="projects-container">
                <Card
                    imageUrl={WorkInProgress}
                    title="Creative Lab"
                    description="Work in Progress"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/creative-lab/tree/master" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/creative-lab/" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={WeatherApp}
                    title="Weather App"
                    description="In this Progressive Web App, I fetch data from the openweathermap API using Axios, to display the current weather of the City serched"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/Weather-App/tree/master" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/Weather-App/" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={TaskManager}
                    title="Task Manager"
                    description="In this Progressive Web App, I used Context for state management and Material UI"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/task-manager/tree/master" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="http://rafdimartino.github.io/task-manager" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={ReactPortfolio}
                    title="React Portfolio"
                    description="Second version of my portfolio, made with React"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/React-Portfolio/tree/master" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.com/" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={Quote}
                    title="The Art of War Quote Generator"
                    description="My version of the Random Quote Machine Generator. Practicing with React hooks useState, useEffect and fetch data from a gist repositoy"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/the-art-of-war-random-quote-generator/tree/master" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/the-art-of-war-random-quote-generator/" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={CounterApp}
                    title="Counter App"
                    description="React counter app. Practicing with react hooks useState and useEffect"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/react-counter-app/tree/master" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/react-counter-app/" target="_blank" rel="noreferrer">View project</a>}
                />
            </div>
        </div>
    )
}

export default ReactProjects
