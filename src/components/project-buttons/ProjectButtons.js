import React from 'react'
import "./project-buttons.css"
import { Link } from "react-router-dom"

function ProjectButtons() {
  return (
    <div className='projects-wrapper'>
        <h2 className='project-title'>Projects</h2>
        <p>Explore all my projects by clicking on the buttons below</p>
        <div className='buttons-wrapper'>
            <Link to="edx-bootcamp"><button className='button home-button'>edX Bootcamp</button></Link>
            <Link to="react-projects"><button className='button home-button'>React Projects</button></Link>
            <Link to="html-css-js-projects"><button className='button home-button'>HTML - CSS - JS</button></Link>
        </div>
    </div>
  )
}

export default ProjectButtons