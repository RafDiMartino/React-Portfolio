import "./SectionTitle.css"
import SectionTitle from "./SectionTitle"
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si"
import Card from "./Card"
import { FaGithub } from "react-icons/fa" 
import Calculator from "./html-css-js-projects-imgs/calculator.PNG"
import Lab from "./html-css-js-projects-imgs/laboratorio-creativo.PNG"
import Cipher from "./html-css-js-projects-imgs/cipher.PNG"
import Clock from "./html-css-js-projects-imgs/digital-clock.PNG"
import Piano from "./html-css-js-projects-imgs/virtual-piano.PNG"
import FlashCards from "./html-css-js-projects-imgs/flash-card.PNG"
import DocPage from "./html-css-js-projects-imgs/doc-page.PNG"
import LandingPage from "./html-css-js-projects-imgs/landing-page.PNG"
import SurveyForm from "./html-css-js-projects-imgs/survey-form.PNG"
import TributePage from "./html-css-js-projects-imgs/tribute-page.PNG"
import Portfolio from "./html-css-js-projects-imgs/portfolio.PNG"

function HtmlCssJsProjects() {
    return (
        <div className="wrapper">
            <SectionTitle 
                icon1={<SiHtml5 />} 
                icon2={<SiCss3 />} 
                icon3={<SiJavascript />}
                title="PROJECTS"
            />
            <div className="projects-container">
                <Card
                    imageUrl={Lab}
                    title="Laboratorio Creativo"
                    description="Mobile First Design website, for an artisan who customises shoes, candles and more..."
                    repoLink={<a className="card-anchor" href="https://github.com/LaboratorioCreativo/LaboratorioCreativo.github.io" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://laboratoriocreativo.github.io/" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={Portfolio}
                    title="Personal Portfolio Page"
                    description="First version of my portfolio website, made with Html, Css and JavaScript "
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/RafDiMartino.github.io" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={Calculator}
                    title="Simple Calculator"
                    description="Simple Calculator, practicing with JavaScript functions, DOM and events"
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/Simple-Calculator" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/Calculator/index.html" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={Cipher}
                    title="Caesar Cipher"
                    description="My version of the Caesar Cipher with three methods of encryption."
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/Caesar-Cipher" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/Caesar-Cipher/index.html" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={Clock}
                    title="Digital Clock"
                    description="Practicing with JavaScript DOM manipulation and Date Object."
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/Digital-Clock" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/DigitalClock/index.html" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={Piano}
                    title="Virtual Piano"
                    description="Practicing with JavaScript DOM manipulation and Events."
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/Virtual-Piano" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/Virtual%20Piano-/Virtual%20Piano.html" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={FlashCards}
                    title="Flash Cards"
                    description="Flashcards of Countries and Capitals. Practicing CSS Animations, Media Queries and CSS Grid."
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/Flashcards" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/Flashcards/index.html" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={DocPage}
                    title="Technical Documentation Page"
                    description="Technical Documentation Page about JavaScript syntax. Practicing Responsive Web Design using Media Queries and Flexbox."
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/Technical-Documentation-Page" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/Technical%20Documentation%20Page/Technical%20Documentation%20Page.html" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={LandingPage}
                    title="Product Landing Page"
                    description="Product Landing Page for the Play Station controller. Practicing Responsive Web Design using Media Queries and Flexbox."
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/Product-Landing-Page" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/Product%20Landing%20Page/Landing%20Page.html" target="_blank" rel="noreferrer">View project</a>}
                 />
                 <Card
                    imageUrl={SurveyForm}
                    title="Survey Form"
                    description="Survey Form on programming languages. Practicing Mobile First Design using Media Queries and Flexbox."
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/Survey-Form" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/Survey%20Form/Survey%20Form.html" target="_blank" rel="noreferrer">View project</a>}
                />
                <Card
                    imageUrl={TributePage}
                    title="Tribute Page"
                    description="Tribute Page for Alexander The Great. Practicing Responsive Web Design using Media Queries and Flexbox."
                    repoLink={<a className="card-anchor" href="https://github.com/RafDiMartino/Tribute-Page" target="_blank" rel="noreferrer" aria-label="github"><FaGithub className="github" /></a>}
                    btn={<a className="card-anchor" href="https://rafdimartino.github.io/Tribute-Page/tribute%20page.html" target="_blank" rel="noreferrer">View project</a>}
                />
            </div>
        </div>
        
    )
}

export default HtmlCssJsProjects
