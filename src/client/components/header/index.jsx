import { BsCart } from "react-icons/bs";
import "./index.sass";
import { Link, Outlet } from "react-router-dom";
import { cartStore } from "../cart";

export default function () {
    const { cart, toggle } = cartStore(s => s)
    return (
        <>
        <div className="Header">
            <Link to="/" className="header-left">
            <h2>Connecting Back To Earth Elements</h2>
            </Link>
            <span className="headerRight">
                <span>
                    <BsCart onClick={toggle}/>
                    {cart.length > 0 && <div className="cart-count">{cart.length}</div>}
                </span>
                <Link to="/shop/all">
                <h6>Shop</h6>
                </Link>
                <Link to="/about">
                <h6>About</h6>
                </Link>
            </span>
        </div>
        </>
    )
}