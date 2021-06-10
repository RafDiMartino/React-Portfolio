import "./SectionTitle.css"
import { SiReact } from "react-icons/si"
import Card from "./Card"
import SectionTitle from "./SectionTitle"
import Quote from "../react-projects-imgs/quoteGenerator.PNG"
import { FaGithub, FaCodepen } from "react-icons/fa";

function ReactProjects() {
    return (
        <div className="wrapper">
            <SectionTitle 
                icon1={<SiReact />}
                title="PROJECTS"
            />
            <div>
                <Card
                    imageUrl={Quote}
                    title="The Art of War Quote Generator"
                    description="My version of the Random Quote Machine Generator. Practicing with React hooks useState, useEffect and fetch data from a gist repositoy"
                    repoLink={<a href="https://github.com/RafDiMartino/the-art-of-war-random-quote-generator/tree/master" target="_blank"><FaGithub className="github" /></a>}
                    btn={<a href="https://rafdimartino.github.io/the-art-of-war-random-quote-generator/" target="_blank">View More</a>}
                />
            </div>
        </div>
    )
}

export default ReactProjects
