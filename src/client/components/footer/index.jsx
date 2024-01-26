import "./index.sass";
import { MdEmail, MdSmartphone } from "react-icons/md"

export default function Footer () {
    return (
        <div className="Footer">
            <span>
                <MdEmail />
                <p>thompsonray193@gmail.com</p>
            </span>
            <span>
                <MdSmartphone />
                <p>4707471634</p>
            </span>
        </div>
    )
}