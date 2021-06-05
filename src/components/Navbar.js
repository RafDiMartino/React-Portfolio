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
                        <li>REACT</li>
                        <li>HTML CSS JS</li>
                    </ul>
                </li>
                <li>CONTACTS <FaCaretDown/>
                    <ul className="contacts">
                        <li>EMAIL</li>
                        <li>PHONE</li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 