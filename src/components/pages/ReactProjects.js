import "./SectionTitle.css"
import { SiReact } from "react-icons/si"
import Card from "./Card"
import SectionTitle from "./SectionTitle"

function ReactProjects() {
    return (
        <div className="wrapper">
            <SectionTitle 
                icon1={<SiReact />}
                title="PROJECTS"
            />
            <div>
                <Card
                    title="Counter App"
                    description="bsblsfkbz"
                />
                <Card
                title="The Art of War Quote Generator"
                description="bsblsfkbz"
            />
            </div>
        </div>
    )
}

export default ReactProjects
