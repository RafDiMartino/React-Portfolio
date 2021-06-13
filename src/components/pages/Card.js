import "./Card.css"


function Card(props) {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={props.imageUrl} alt="quote generator" />
            </div>
            <div className="text-wrapper">
                <h2 className="title">{props.title}</h2>
                
                <div className="text-container">
                    <p className="description">{props.description}</p>
                    <div className="project-links">
                        <button className="btn">{props.btn}</button>
                        <div className="repo-links">{props.repoLink}</div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card