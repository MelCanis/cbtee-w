import { Link } from "react-router-dom";
import "./index.sass";

export default function Hero () {
    return (
        <div className="Hero">
            <div className="background">
                {/* <img src={"/assets/images/hero-1.jpg"} alt="" />
                <img src={"/assets/images/hero-2.jpg"} alt="" />
                <img src={"/assets/images/hero-3.jpg"} alt="" /> */}
                <img src="/assets/images/dalmation.jpg"  />
            </div>
            <div className="text">
                <h1 className="emblem">Connecting Back To Earth Elements</h1>
                
                <Link to="/shop/all">
                <button>Shop Now</button>
                </Link>
                <h4>All healing stones & crystals. If they’re not cold, they’re not real. Stones are genuine & everlasting.</h4>
            </div>
        </div>
    )
}