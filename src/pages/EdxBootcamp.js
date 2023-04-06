import "../components/section-title/section-title.css"
import SectionTitle from "../components/section-title/SectionTitle"
import "../styles/projects.css"
import { FaGithub } from "react-icons/fa"
import Card from "../components/card/Card"
import CardNoButton from "../components/card/CardNoButton"
import edx from "../assets/edx-bootcamp-imgs/edx.svg"
import challenge1 from "../assets/edx-bootcamp-imgs/challenge-1.png"
import challenge2 from "../assets/edx-bootcamp-imgs/challenge-2.png"
import challenge3 from "../assets/edx-bootcamp-imgs/challenge-3.png"
import challenge4 from "../assets/edx-bootcamp-imgs/challenge-4.png"
import challenge5 from "../assets/edx-bootcamp-imgs/challenge-5.png"
import challenge6 from "../assets/edx-bootcamp-imgs/challenge-6.png"
import challenge7 from "../assets/edx-bootcamp-imgs/challenge-7.png"
import challenge8 from "../assets/edx-bootcamp-imgs/challenge-8.png"
import project1 from "../assets/edx-bootcamp-imgs/project-1.png"
import challenge11 from "../assets/edx-bootcamp-imgs/challenge-11.png"
import challenge12 from "../assets/edx-bootcamp-imgs/challenge-12.png"
import challenge13 from "../assets/edx-bootcamp-imgs/challenge-13.png"

function EdxBootcamp() {
    return (
        <div className="wrapper">
            <SectionTitle 
                icon1={<><img src={edx} alt="Edx logo" /><p className="bootcamp">Bootcamp</p></>}
                title="PROJECTS"
            />
            <div className="projects-container">
                <Card
                    imageUrl={challenge13}
                    title="React Portfolio"
                    description="In this assignement my task was to create a Personal Portfolio Webpage using React.js, and React-router-dom."
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/module-13-challenge-react-portfolio" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.github.io/module-13-challenge-react-portfolio/"}
                />
                <CardNoButton
                    imageUrl={challenge12}
                    title="Team Profile Generator"
                    description="In this assignment my task was to create a command-line application that generates a webpage from user's input using Inquirer.js. Built in JavaScript, Node.js, uses ES6 sintax and Jest.js for unit testing"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/module-12-challenge-team-profile-generator" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                />
                <CardNoButton
                    imageUrl={challenge11}
                    title="README Generator"
                    description="In this assignment my task was to create a command-line application that generates a README.md file from user's input using Inquirer.js, the application is built in JavaScript, Node.js and uses ES6 sintax."
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/module-11-challenge-professional-readme-generator" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                />
                <Card
                    imageUrl={project1}
                    title="Project WikiTube"
                    description='Group project, our task was to design and build a web app using two public APIs and use HTML, Bootstap, jQuery.'
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/project-wikitube" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.github.io/project-wikitube/"}
                />
                <Card
                    imageUrl={challenge8}
                    title="Weather Dashboard"
                    description='In this assignment my task was to build a weather dashboard using the Open Weather API and use localStorage to make searches persistent. Made with HTML, Bootstrap and jQuery'
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/module-8-challenge-weather-dashboard" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.github.io/module-8-challenge-weather-dashboard/"}
                />
                <Card
                    imageUrl={challenge7}
                    title="JavaScript Quiz Game"
                    description='In this assignment my task was to create a simple calendar application that allows a user to save events. Made with HTML, Bootstrap and jQuery'
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/module-7-challenge-daily-planner-app" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.github.io/module-7-challenge-daily-planner-app/"}
                />
                <Card
                    imageUrl={challenge6}
                    title="JavaScript Quiz Game"
                    description='In this assignment my task was to create a Coding Quiz about JavaScript that runs in the browser and features dynamically updated HTML and CSS, all powered by JavaScript.'
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/module-6-challenge-code-quiz" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.github.io/module-6-challenge-code-quiz/index.html"}
                />
                <Card
                    imageUrl={challenge5}
                    title="Password Generator"
                    description='In this assignment my task was to create Password Generator that generates a password when the button "generate password" is clicked. Made with HTML, CSS, JavaScript'
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/module-5-challenge-password-generator" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.github.io/module-5-challenge-password-generator/"}
                />
                <Card
                    imageUrl={challenge4}
                    title="Console Finances"
                    description='In this assignment my task was to create a financial analysis tool by writing JavaScript code that analyzes the records to calculate profit/losses'
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/module-4-challenge-console-finances" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.github.io/module-4-challenge-console-finances/"}
                />
                <Card
                    imageUrl={challenge3}
                    title="Bootstrap Portfolio Page"
                    description='In this assignment my task was to create a Personal Portfolio Webpage by practicing with: CSS flexbox, CSS grid, CSS variables and CSS media queries'
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/module-3-challenge-bootstrap-portfolio" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.github.io/module-3-challenge-bootstrap-portfolio/"}
                />
                <Card
                    imageUrl={challenge2}
                    title="Portfolio Page"
                    description='In this assignment my task was to create a Personal Portfolio Webpage by practicing with: CSS flexbox, CSS grid, CSS variables and CSS media queries'
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/module-2-challenge" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.github.io/module-2-challenge/"}
                />
                <Card
                    imageUrl={challenge1}
                    title="Code Refactor"
                    description='In this assignment my task was to refactor the HTML code to meet modern "Accessibility" standards.'
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/module-1-challenge" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    projectLink={"https://rafdimartino.github.io/module-1-challenge/"}
                />
            </div>
        </div>
    )
}

export default EdxBootcamp