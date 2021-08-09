import './Card.css'

function Card({imageUrl, description, btn, repoLink, title}) {
    return (
        <div className="card-wrapper">
            <div className="img-wrapper">
                <img src={imageUrl} alt="quote generator" />
                <div className="description-wrapper">
                    <p className="description">{description}</p>
                    <div className="project-links">
                    <button className="btn">{btn}</button>
                    <div className="repo-links">{repoLink}</div>
                    </div>
                </div>
                <h2 className="title">{title}</h2>
            </div>

        </div>
    )
}

export default Card