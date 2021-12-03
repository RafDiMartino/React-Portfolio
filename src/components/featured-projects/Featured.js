import React from 'react'
import "./featured.css"

const Featured = ({ img, description, link }) => {
    return (
        <div className="featured">
            <img src={img} alt="featured" />
            <div className="featured-description">
                <p>{description}</p>
                <a className="card-anchor" href={link} target="_blank" rel="noreferrer">
                    <button className="btn">View Website</button>
                </a>
            </div>
        </div>
    )
}

export default Featured
