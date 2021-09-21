import React from 'react'
import "./skills.css"
import html from "../../assets/skills-logos/html.svg"
import css from "../../assets/skills-logos/css.svg"
import javascript from "../../assets/skills-logos/javascript.svg"
import sass from "../../assets/skills-logos/sass.svg"
import react from "../../assets/skills-logos/react.svg"
import firebase from "../../assets/skills-logos/firebase.svg"


const Skills = () => {

    return (
        <div className="skills">
            <h2>My Skills</h2>
            <div className="skills-logo">
                <img src={react} alt="" />
                <img src={sass} alt="" />
                <img src={firebase} alt="" />
                <img src={javascript} alt="" />
                <img src={css} alt="" />
                <img src={html} alt="" /> 
            </div>
        </div>
    )
}

export default Skills
