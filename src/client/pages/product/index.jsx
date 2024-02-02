import { useParams } from "react-router-dom";
import products from "../../data/products";
import "./index.sass";
import { useEffect, useRef, useState } from "react";
import { cartStore } from "../../components/cart";
import ImageZoom from "js-image-zoom";
import checkout from "../../../server/script.js"

export default function Product () {
    const { productName } = useParams();
    const [ product, setProduct ] = useState();
    const { update } = cartStore(s => s)
    const imageRef = useRef(null);
    const [ loaded, setLoaded ] = useState(false)
    const [ zoom, setZoom ] = useState(false)
    const { cart } = cartStore(s => s);

    // useEffect(_ => {
    //     var options = {
    //         width: 300,
    //         zoomWidth: 16*24,
    //         zoomStyle: 'border: 1px solid #555; box-shadow: 0 8px 24px #333',
    //         offset: {vertical: 0, horizontal: 32},
    //     };
    //     if (!loaded) {
    //         setLoaded(true);
    //         return;
    //     }
    //     if (!zoom) {
    //         new ImageZoom(imageRef.current , options)
    //         setZoom(true);
    //     }
    // }, [zoom, loaded, imageRef.current])
    useEffect(_ => {
        setProduct(products.find(i => i.name == productName.replace(/X/g, "#").split("-").join(" ")))
    }, [productName])
    if (product) return (
        <div className="Product page">
            <div className="info">
                <h2 className="name">{product.name}</h2>
                <hr />
                <h3 className="price">{"$" + product.price}</h3>
                <p className="description">All necklaces include Ms. Thompson Ray's Dalmation Signature which helps balance your energies with the other stones.</p>
                <span className="buttons">
                    <button onClick={_ => !cart.includes(product) && update(product)}>ADD TO CART</button>
                    <button onClick={_ => checkout([product])}>BUY NOW</button>
                </span>
            </div>
            <div className="product-image">
                <div className="image" ref={imageRef}>
                    <img src={`/assets/products/${product.name.replace(/#/g, "-")}.jpg`}/>
                </div>
            </div>
            <div className="foot"></div>
        </div>
    )
}