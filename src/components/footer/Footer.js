import "./footer.css"
import { FaReact } from "react-icons/fa"


function Footer() {
    return (
        <div className="footer">
            <p className="madeBy">&copy;2023 by Raffaele Di Martino | </p>
            <FaReact className="reactLogo"/>
        </div>
    )
}

export default Footer

