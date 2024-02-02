import { BsHouse, BsCart, BsBag } from "react-icons/bs";
import Icon from "/assets/images/dalmation-icon.png"
import "./index.sass";
import { Link, Outlet } from "react-router-dom";
import { cartStore } from "../cart";

const companyname = "Connecting Back To Earth Elements"

export default function () {
    const { cart, toggle } = cartStore(s => s)
    return (
        <>
        <div className="Header">
            <Link to="/" className="headerLeft">
                {/* <p>asd</p> */}
                {/* <h2>CBTEE</h2> */}
                {/* <h2>
                    <span>C</span>ONNECTING&nbsp;
                    <span>B</span>ACK&nbsp;
                    <span>T</span>O&nbsp;
                    <span>E</span>ARTH&nbsp;
                    <span>E</span>LEMENTS&nbsp;
                </h2> */}
                {/* <img src={Icon} alt="" /> */}
                <BsHouse />
                {/* <h6>Home</h6> */}
            </Link>
            <Link to="/" className="headerMiddle">
                {/* <h2>{companyname.toUpperCase()}</h2> */}
            </Link>
            <span className="headerRight">
                <div className="content">
                    <Link to="/shop/all">
                        <BsBag />
                        <h6>Shop</h6>
                    </Link>
                    <span onClick={toggle}>
                        <BsCart />
                        <h6>Cart</h6>
                        {cart.length > 0 && <div className="cart-count">{cart.length}</div>}
                    </span>
                    {/* <Link to="/about">
                        <h6>About</h6>
                    </Link> */}
                </div>
            </span>
        </div>
        </>
    )
}