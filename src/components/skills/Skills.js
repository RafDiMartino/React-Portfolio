import React from 'react'
import "./skills.css"
import html from "../../assets/skills-logos/html.svg"
import css from "../../assets/skills-logos/css.svg"
import javascript from "../../assets/skills-logos/javascript.svg"
import sass from "../../assets/skills-logos/sass.svg"
import react from "../../assets/skills-logos/react.svg"
import firebase from "../../assets/skills-logos/firebase.svg"
import nextjs from "../../assets/skills-logos/next-js.svg"
import git from "../../assets/skills-logos/git-icon.svg"
import github from "../../assets/skills-logos/github-icon-1.svg"
import jquery from "../../assets/skills-logos/jquery.svg"
import bootstrap from "../../assets/skills-logos/bootstrap.svg"
import tailwind from "../../assets/skills-logos/tailwind.svg"
import nodejs from "../../assets/skills-logos/nodejs.svg"
import typescript from "../../assets/skills-logos/typescript.svg"
import hubspot from "../../assets/skills-logos/hubspot.svg"
import expressionengine from "../../assets/skills-logos/expressionengine.svg"
import figma from "../../assets/skills-logos/figma.svg"
import sketch from "../../assets/skills-logos/sketch.svg"
import threejs from "../../assets/skills-logos/threejs.svg"
import vitejs from "../../assets/skills-logos/vitejs.svg"

const Skills = () => {

    return (
        <div className="skills">
            <h2>My Skills</h2>
            <div className="skills-logos">
                <img src={nextjs} alt="Next Logo" />
                <img src={react} alt="React Logo" />
                <img src={typescript} alt="TypeScript Logo" />
                <img src={javascript} alt="JavaSript Logo" />
                <img src={jquery} alt="jQuery Logo" />
                <img src={threejs} alt="Three.js Logo" />
                <img src={css} alt="CSS Logo" />
                <img src={html} alt="HTML Logo" />
                <img src={tailwind} alt="Tailwind-Css Logo" />
                <img src={sass} alt="Sass Logo" /> 
                <img src={bootstrap} alt="Bootstrap Logo" />
                <img src={hubspot} alt="HubSpot Logo" />
                <img src={expressionengine} alt="ExpressionEngine Logo" />
                <img src={vitejs} alt="Vite.js Logo" />
                <img src={nodejs} alt="Node.js Logo" />
                <img src={git} alt="Git Logo" />
                <img src={github} alt="Github Logo" />
                <img src={firebase} alt="Firebase Logo" />
                <img src={figma} alt="Figma Logo" />
                <img src={sketch} alt="Sketch Logo" />
            </div>
        </div>
    )
}

export default Skills
