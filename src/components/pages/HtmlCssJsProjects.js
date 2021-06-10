import "./SectionTitle.css"
import SectionTitle from "./SectionTitle"
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si"
import Card from "./Card"

function HtmlCssJsProjects() {
    return (
        <div className="wrapper">
            <SectionTitle 
                icon1={<SiHtml5 />} 
                icon2={<SiCss3 />} 
                icon3={<SiJavascript />}
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
                <Card
                    title="The Art of War Quote Generator"
                    description="bsblsfkbz"
                />
            </div>
        </div>
        
    )
}

export default HtmlCssJsProjects
