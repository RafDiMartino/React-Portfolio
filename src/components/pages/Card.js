import "./Card.css"

function Card(props) {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={props.imageUrl} alt="quote generator" />
            </div>
            <h3 className="title">{props.title}</h3>
            <div className="text-container">
                <p className="description">{props.description}</p>
                <div className="repo-links">{props.repoLink}</div>
                <button className="btn">{props.btn}</button>
            </div>
        </div>
    )
}

export default Card
