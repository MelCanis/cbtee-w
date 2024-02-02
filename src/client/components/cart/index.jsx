import { create } from "zustand";
import "./index.sass";
import { BsFillTrash2Fill } from "react-icons/bs"
import checkout from "../../../server/script";
import { useEffect, useState } from "react";

const cartStore = create((set, get) => ({
    open: false,
    toggle: x => set(state => ({open: !state.open})),
    cart: [],
    set: x => set(x),
    update: x => !get().cart.includes(x) ? set(state => ({cart: [...state.cart, x]})) : undefined,
    remove: x => set(state => ({cart: state.cart.filter(i => i.name != x.name)})),
    empty: _ => set(_ => ({cart: []}))
}));
export { cartStore }

function CartItem (product) {
    const { remove } = cartStore(s => s)
    return (
        <div className="CartItem">
            {/* <input type="checkbox" defaultChecked="true" onChange={_ => remove(product)}/> */}
            <BsFillTrash2Fill onClick={_ => remove(product)} />
            <img src={`/assets/products/${product.name.replace(/#/g, "-")}.jpg`} alt="" />
            <span>
                <h5>{product.name}</h5>
                <h6>{`$${product.price}`}</h6>
            </span>
        </div>
    )
}


export default function Cart () {
    const { open, cart } = cartStore(s => s);
    const [subtotal, setSubtotal] = useState(0);
    useEffect(_ => { let st = 0; cart.map((i => st+=i.price)); setSubtotal(s => st); }, [cart]);

    if ( open ) return (
        <div className="Cart">
            {/* <p>My Cart</p> */}
            {cart.length > 0 ?
            <p>Cart Subtotal: ${subtotal} ({cart.length} item{cart.length > 1 ? "s" : ""})</p>:
            <p>0 Items In Cart</p>
            
            }
            <button onClick={_ => checkout(cart)}>Proceed To Checkout</button>
            <div className="cart-items">
                {cart.map(i => <CartItem key={i.name} {...i}/>)}
            </div>
        </div>
    )
}
