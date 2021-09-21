import React from 'react'
import "./section-title.css"

function SectionTitle({ icon1, icon2, icon3, title }) {
    return (
        <div>
            <div className="title-container">
                <div className="icons-container">
                    <div className="icons">{icon1}{icon2}{icon3}</div>
                </div>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default SectionTitle