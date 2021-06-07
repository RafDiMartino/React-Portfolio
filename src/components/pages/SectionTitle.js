import "./SectionTitle.css" 

function SectionTitle(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <div>{props.icon1}{props.icon2}{props.icon3}</div>
        </div>
    )
}

export default SectionTitle
