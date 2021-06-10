import React from 'react'


function SectionTitle(props) {
    return (
        <div>
            <div className="title-container">
                <div className="icons-container">
                    <div className="icons">
                        <span className="icon">{props.icon1}</span>
                        <span className="icon" style={{display: props.icon2 ? "inline-block" : "none"}}>{props.icon2}</span>
                        <span className="icon" style={{display: props.icon3 ? "inline-block" : "none"}}>{props.icon3}</span>
                    </div>
                </div>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default SectionTitle