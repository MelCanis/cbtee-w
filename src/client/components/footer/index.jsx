import "./index.sass";
import { MdEmail, MdSmartphone } from "react-icons/md"

export default function Footer () {
    return (
        <div className="Footer">
            <h4>CONTACT US</h4>
            <span>
                <MdEmail />
                <p>thompsonray193@gmail.com</p>
            </span>
            <span>
                <MdSmartphone />
                <p>(470) 747-1634</p>
            </span>
        </div>
    )
}