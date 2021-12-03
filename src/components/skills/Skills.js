import React from 'react'
import "./skills.css"
import html from "../../assets/skills-logos/html.svg"
import css from "../../assets/skills-logos/css.svg"
import javascript from "../../assets/skills-logos/javascript.svg"
import sass from "../../assets/skills-logos/sass.svg"
import react from "../../assets/skills-logos/react.svg"
import firebase from "../../assets/skills-logos/firebase.svg"
import nextjs from "../../assets/skills-logos/nextjs-2.svg"
import git from "../../assets/skills-logos/git-icon.svg"
import github from "../../assets/skills-logos/github-icon-1.svg"

const Skills = () => {

    return (
        <div className="skills">
            <h2>My Skills</h2>
            <div className="skills-logos">
                <img src={nextjs} alt="Next Logo" />
                <img src={react} alt="React Logo" />
                <img src={sass} alt="Sass Logo" />
                <img src={javascript} alt="JavaSript Logo" />
                <img src={css} alt="CSS Logo" />
                <img src={html} alt="HTML Logo" /> 
                <img src={firebase} alt="Firebase Logo" />
                <img src={github} alt="Github Logo" />
                <img src={git} alt="Git Logo" />
            </div>
        </div>
    )
}

export default Skills
