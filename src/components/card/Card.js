import './card.css'

function Card({imageUrl, description, projectLink, repoLink, title}) {
    return (
        <div className="card-wrapper">
            <div className="img-wrapper">
                <img src={imageUrl} alt="card" />
                <div className="description-wrapper">
                    <p className="description">{description}</p>
                    <div className="project-links">
                        <a className="card-anchor" href={projectLink} target="_blank" rel="noreferrer">
                            <button className="btn">View project</button>
                        </a>
                        <div className="repo-links">{repoLink}</div>
                    </div>
                </div>
            </div>
            <h2 className="title">{title}</h2>
        </div>
    )
}

export default Card