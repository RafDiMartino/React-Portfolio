import "./Card.css"

function Card(props) {
    return (
        <div className="project-card">
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>
            <div className="repo-links">{props.repoLink}</div>
        </div>
    )
}

export default Card
