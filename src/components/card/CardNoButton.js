import './card.css'

function CardNoButton({imageUrl, description, repoLink, title}) {
    return (
        <div className="card-wrapper">
            <div className="img-wrapper">
                <img src={imageUrl} alt="card" />
                <div className="description-wrapper">
                    <p className="description">{description}</p>
                    <div className="project-links">
                        <div className="repo-links">{repoLink}</div>
                    </div>
                </div>
            </div>
            <h2 className="title">{title}</h2>
        </div>
    )
}

export default CardNoButton