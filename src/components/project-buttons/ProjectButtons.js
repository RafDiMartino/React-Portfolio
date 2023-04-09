import React from 'react'
import "./project-buttons.css"
import { Link } from "react-router-dom"

function ProjectButtons() {
  return (
    <div className='projects-wrapper'>
        <h2 className='project-title'>Projects</h2>
        <p>Explore all my projects by clicking on the buttons below</p>
        <div className='buttons-wrapper'>
            <Link to="edx-bootcamp"><a className='button home-button'>edX Bootcamp</a></Link>
            <Link to="react-projects"><a className='button home-button'>React Projects</a></Link>
            <Link to="html-css-js-projects"><a className='button home-button'>HTML - CSS - JS</a></Link>
        </div>
    </div>
  )
}

export default ProjectButtons