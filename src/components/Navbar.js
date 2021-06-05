import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaCaretDown } from "react-icons/fa"

function Navbar() {  

    return (
        <nav>
            <ul className="nav-wrapper">
                <li>HOME</li>
                <li>PROJECTS <FaCaretDown/>
                    <ul className="projects">
                        <li>React</li>
                        <li>Html css js</li>
                    </ul>
                </li>
                <li>CONTACTS <FaCaretDown/>
                    <ul className="contacts">
                        <li>Email</li>
                        <li>Phone</li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 