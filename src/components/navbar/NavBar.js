import React, {useState, useRef, useEffect} from 'react'
import { Link } from "react-router-dom"
import "./navbar.css"
import { FaCaretDown } from "react-icons/fa"


const NavBar2 = () => {

    const [dropdown, setDropdown] = useState(false)

    const toggleDropdown = () => {
        setDropdown(!dropdown)  
    }

    const ref = useRef()

    useEffect(() => {
        const ifClickedOutside = (e) => {
            if (!ref.current.contains(e.target)) {
                setDropdown(false)
            }
        }
        document.addEventListener("click", ifClickedOutside);
        return () => {
            document.removeEventListener("click", ifClickedOutside);
        }
    }, [dropdown])


    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/"><div className="home">HOME</div></Link>
                <div ref={ref} onClick={toggleDropdown} className="projects">
                    PROJECTS
                    <FaCaretDown/>
                    {dropdown && (
                        <div className="open-dropdown">
                            <Link  to="react-projects"><p className="react">REACT</p></Link>
                            <Link  to="html-css-js-projects"><p>HTML CSS JS</p></Link>
                        </div>
                    )}
                </div>
                <a href="mailto:r.dimartino.uk@gmail.com"><div className="contact">CONTACTS</div></a>
            </div>
        </nav>
    )
}

export default NavBar2
