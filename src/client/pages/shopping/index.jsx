import { Link, useParams } from "react-router-dom";
import products from "../../data/products";
import "./index.sass";
import { useEffect, useState } from "react";
import { IoFilterSharp } from "react-icons/io5"

function Product ({name, price}) {
    return (
    
    <Link className="product" to={`/product/${name.replace(/#/g, "X").split(" ").join("-")}`}>
        <div >
            <img src={`/assets/products/${name.replace(/#/g, "-")}.jpg`} />
            <div className="span">
                <h3>{name}</h3>
                <h5>{"$" + price}</h5>
            </div>
        </div>
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
    const [ list, setList ] = useState(products);
    useEffect(_ => {
        setList(products.filter(filters[filter]))
    }, [filter])
    return (
        <div className="Shop page">
            <div className="filters">
                <IoFilterSharp />
                <Link to="/shop/all" className={"filter" + (filter == "all" ? " filter-active" : "")} >ALL</Link>
                <Link to="/shop/65" className={"filter" + (filter == "65" ? " filter-active" : "")}>$65,&nbsp;&nbsp;2 FOR $100</Link>
                <Link to="/shop/75" className={"filter" + (filter == "75" ? " filter-active" : "")}>$75</Link>
                <Link to="/shop/100" className={"filter" + (filter == "100" ? " filter-active" : "")}>$100 - $125</Link>
                <Link to="/shop/sets" className={"filter" + (filter == "sets" ? " filter-active" : "")}>SETS</Link>
                <Link to="/shop/cages" className={"filter" + (filter == "cages" ? " filter-active" : "")}>CAGES</Link>
            </div>
            <div className="products">
                {list.sort((a, b) => a.name.localeCompare(b.name)).map(i => <Product key={i.name} {...i}/>)}
            </div>
        </div>
    )
}