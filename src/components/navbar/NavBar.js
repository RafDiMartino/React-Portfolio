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
        <header>
            <nav className="nav-wrapper">
                <Link to="/"><div className="home">HOME</div></Link>
                <div ref={ref} onClick={toggleDropdown} className="projects">
                    PROJECTS
                    <FaCaretDown/>
                    {dropdown && (
                        <div className="open-dropdown">
                            <Link  to="edx-bootcamp"><p>edX BOOTCAMP</p></Link>
                            <Link  to="react-projects"><p>REACT</p></Link>
                            <Link  to="html-css-js-projects"><p>HTML CSS JS</p></Link>
                        </div>
                    )}
                </div>
                <Link to="contacts"><a href="mailto:r.dimartino.uk@gmail.com"><div className="contact">CONTACTS</div></a></Link>
            </nav>
        </header>
    )
}

export default NavBar2
