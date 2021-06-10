import "./Card.css"
import { MdKeyboardArrowDown } from "react-icons/md"


function Card(props) {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={props.imageUrl} alt="quote generator" />
            </div>
            <div className="project-title-container">
                <h3 className="title">{props.title}</h3>
                <div className="arrow-down"><MdKeyboardArrowDown /></div>
            </div>
            <div className="text-container">
                <p className="description">{props.description}</p>
                <div className="repo-links">{props.repoLink}</div>
                <button className="btn">{props.btn}</button>
            </div>
        </div>
    )
}

export default Card
