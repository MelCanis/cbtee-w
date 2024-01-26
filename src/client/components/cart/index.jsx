import { create } from "zustand";
import "./index.sass";
import { BsFillTrash2Fill } from "react-icons/bs"
import checkout from "../../../server/script";

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
    const { open, cart } = cartStore(s => s)

    if ( open ) return (
        <div className="Cart">
            {/* <p>My Cart</p> */}
            <button onClick={_ => checkout(cart)}>Order Now</button>
            <div className="cart-items">
                {cart.map(i => <CartItem key={i.name} {...i}/>)}
            </div>
        </div>
    )
}
