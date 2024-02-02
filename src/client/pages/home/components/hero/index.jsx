import { Link } from "react-router-dom";
import "./index.sass";

export default function Hero () {
    return (
        <div className="Hero">
            {/* <div className="top"> */}
                <div className="background">
                    <img src="/assets/images/dalmation.jpg"  />
                </div>
            {/* </div> */}
            <div className="bottom">
                <div className="text">
                    <h1 className="emblem"><span>C</span>onnecting <span>B</span>ack <span>T</span>o <span>E</span>arth <span>E</span>lements</h1>
                    
                    <h4>All healing stones & crystals. If they’re not cold, they’re not real. Stones are genuine & everlasting.</h4>
                    <Link to="/shop/all">
                        <button>SHOP NOW</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}