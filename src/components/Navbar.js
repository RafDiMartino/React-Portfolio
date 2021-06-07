import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaCaretDown } from "react-icons/fa"


function Navbar() {  

    return (
        <nav>
            <ul className="nav-wrapper">
                <li><Link to="/" className="nav-links">HOME</Link></li>
                <li>PROJECTS <FaCaretDown/>
                    <ul className="projects">
                        <li><Link  to="react-projects" className="nav-links-project">REACT</Link></li>
                        <li><Link  to="html-css-js-projects" className="nav-links-project">HTML CSS JS</Link></li>
                    </ul>
                </li>
                <li><a href="mailto:r.dimartino.uk@gmail.com" className="nav-links">CONTACT</a></li>
            </ul>
        </nav>
    )
}

export default Navbar 