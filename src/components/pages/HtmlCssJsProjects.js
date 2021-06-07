import SectionTitle from "./SectionTitle"
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si"

function HtmlCssJsProjects() {
    return (
        <div>
            <SectionTitle 
                name="Html Css Js Projects"
                icon1={<SiHtml5/>}
                icon2={<SiCss3/>}
                icon3={<SiJavascript/>}
            />
        </div>
    )
}

export default HtmlCssJsProjects
