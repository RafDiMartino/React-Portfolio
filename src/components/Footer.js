import "./Footer.css"
import { FaReact } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

function Footer() {
    return (
        <div className="footer">
            <p className="madeBy">&copy; 2021 by Raffaele Di Martino | </p>
            <FaReact className="reactLogo"/>
            <a className="card-anchor" href="https://github.com/RafDiMartino/React-Portfolio/tree/master" target="_blank" rel="noreferrer"><FaGithub className="githubLogo" /></a>
        </div>
    )
}

export default Footer

