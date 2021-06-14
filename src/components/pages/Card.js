import './Card.css'

function Card(props) {
    return (
        <div className="card-wrapper">
            <div className="img-wrapper">
                <img src={props.imageUrl} alt="quote generator" />
                <div className="description-wrapper">
                    <p className="description2">{props.description}</p>
                    <div className="project-links2">
                    <button className="btn2">{props.btn}</button>
                    <div className="repo-links2">{props.repoLink}</div>
                    </div>
                </div>
                <div className="title-wrapper">
                    <h2 className="title2">{props.title}</h2>
                </div>
            </div>

        </div>
    )
}

export default Card


/*<div className="description-wrapper">
                
<div className="text-container2">
    <p className="description2">{props.description}</p>
    <div className="project-links2">
        <button className="btn2">{props.btn}</button>
        <div className="repo-links2">{props.repoLink}</div>
    </div>
</div>

</div>*/