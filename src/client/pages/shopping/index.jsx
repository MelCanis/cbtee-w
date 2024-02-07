import { Link, useParams } from "react-router-dom";
import "./index.sass";
import { useEffect, useState } from "react";
import { IoFilterSharp } from "react-icons/io5"
import Icon from "/assets/images/dalmation-icon.png"
import { listProducts } from "../../../server/script";

function Product ({name, price, images}) {
    const className = (['Leopardite (Stainless Steal Chain)', 'Raw Pyrite with Turquoise',
    'Tiger Eye & Shungite', 'Tree Cages with Crystal Ear Rings (Multiple Stones in Cages)',
    'Australian Zebra Stone & Picture Jasper', 'Chakra Chips (Multiple Stones) (Orange Calcite Pointer)',
    'Garnet with Dalmation #1', 'Garnet with Dalmation #2',
    'Red Turquoise (Dalmation Signature)', 'Black Onyx (Stainless Steel Chain)'].includes(name)) ? "crop-fix" :
    (['Chakra Chips (Multiple Stones) (Turquoise Pointer)', 'Turqoise with Red Jasper Chips',
    'Labradorite'].includes(name)) ? "crop-fix-2" : ""
    return (

    <Link className={"product " + className} to={`/product/${name.replace(/#/g, "X").split(" ").join("-")}`}>
        {/* <div > */}
            <div className="top">
                <div className="image">
                    {/* <img src={`/assets/products/${name.replace(/#/g, "-")}.jpg`} /> */}
                    <img src={images[0]} alt="" />
                </div>
            </div>
            <div className="text">
                <h3>{name}</h3>
                <h5>{"$" + price}</h5>
            </div>
        {/* </div> */}
    </Link>)
}

const filters = {
    all: x => x,
    "65": x => x.price == 65,
    "75": x => x.price == 75,
    "100": x => x.price == 100,
    sets: x => x.category == "set",
    cages: x => x.category == "cage",
}

export default function Shop () {
    const { filter } = useParams();
    const [ list, setList ] = useState(null);
    useEffect(_ => {
        !list && listProducts()
        .then(x => setList(x));
    }, [list])
    return (
        <div className="Shop page">
            <div className="filters-container">
                <div className="filters">
                    <IoFilterSharp />
                    <Link to="/shop/all" className={"filter" + (filter == "all" ? " filter-active" : "")} >ALL</Link>
                    <Link to="/shop/65" className={"filter" + (filter == "65" ? " filter-active" : "")}>$65,&nbsp;&nbsp;2 FOR $100</Link>
                    <Link to="/shop/75" className={"filter" + (filter == "75" ? " filter-active" : "")}>$75</Link>
                    <Link to="/shop/100" className={"filter" + (filter == "100" ? " filter-active" : "")}>$100 - $125</Link>
                    <Link to="/shop/sets" className={"filter" + (filter == "sets" ? " filter-active" : "")}>SETS</Link>
                    <Link to="/shop/cages" className={"filter" + (filter == "cages" ? " filter-active" : "")}>CAGES</Link>
                </div>
                <div className="img">
                    <img src={Icon} alt="" />
                </div>
            </div>
            <div className="products">
                {list && list.sort((a, b) => a.name.localeCompare(b.name)).map(i => <Product key={i.name} {...i}/>)}
            </div>
        </div>
    )
}