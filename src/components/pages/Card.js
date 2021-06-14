import './Card.css'

function Card(props) {
    return (
        <div className="card-wrapper">
            <div className="img-wrapper">
                <img src={props.imageUrl} alt="quote generator" />
                <div className="description-wrapper">
                    <p className="description">{props.description}</p>
                    <div className="project-links">
                    <button className="btn">{props.btn}</button>
                    <div className="repo-links">{props.repoLink}</div>
                    </div>
                </div>
                <h2 className="title">{props.title}</h2>
            </div>

        </div>
    )
}

export default Card