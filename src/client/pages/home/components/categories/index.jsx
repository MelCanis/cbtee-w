import { Link } from "react-router-dom";
import "./index.sass";

function Category ({title, images, path}) {
    return (
        <div className="Category">
            <h2>{title}</h2>
            <div className="images">
                {images.map(i => <img key={i} src={"assets/products/" + i} />)}
            </div>
            <Link to={`/shop/${path}`}>
                <button>Open</button>
            </Link>
        </div>
    )
}


export default function Categories () {
    return (
        <div className="Categories">
            {/* <h1>Discover</h1> */}
            {/* <Category path="cages" title={"Cages"} images={["Tree Cages with Crystal Ear Rings (Multiple Stones in Cages).jpg","Leopardite (Stainless Steal Chain).jpg"]} />
            <Category path="sets" title={"Sets"} images={["Clear Crystal with Gold Hematite (Raw Opal in Cage).jpg","Amethyst with Raw Amethyst Ear Rings (Abalone Pendant).jpg"]} />
            <Category path="65" title={"$65, 2 for $100"} images={["Green Jades with Carnelian (Dalmation Signature).jpg","Dalmation & Orange Calcite (Signature Necklace).jpg"]} />
            <Category path="100" title={"$100-$125"} images={["Raw Pyrite with Turquoise.jpg","Tiger Eye & Shungite.jpg"]} /> */}
            
            <div className="content">
                <Link to="/shop/cages" className="Category">
                    {/* <div > */}
                        <div className="left">
                            <img src="/assets/images/cages-photo.jpg" alt="" />
                        </div>
                        <div className="right">
                            <h2>CAGES</h2>
                            <button>SEE MORE</button>

                        </div>
                        {/* <button>CAGES</button> */}
                    {/* </div> */}
                </Link>
                <Link to="/shop/sets" className="Category">
                    {/* <div > */}
                        <div className="left">
                            <img src="/assets/images/sets-photo.jpg" alt="" />
                        </div>
                        <div className="right">
                            <h2>SETS</h2>
                            <button>SEE MORE</button>
                            
                        </div>
                        {/* <button>SETS</button> */}
                    {/* </div> */}
                </Link>
                <Link to="/shop/100" className="Category">
                    {/* <div > */}
                        <div className="left">
                            <img src="/assets/images/100-photo.jpg" alt="" />
                        </div>
                        <div className="right">
                            <h2>$100 - $125</h2>
                            <button>SEE MORE</button>
                            
                        </div>
                        {/* <button>$100 - $125</button> */}
                    {/* </div> */}
                </Link>
                <Link to="/shop/65" className="Category">
                    {/* <div> */}
                        <div className="left">
                            <img src="/assets/images/65-photo.jpg" alt="" />
                        </div>
                        <div className="right">
                            <h2>$65,&nbsp; 2 FOR $100</h2>
                            <button>SEE MORE</button>
                            
                        </div>
                        {/* <button>$65,&nbsp; 2 FOR $100</button> */}
                    {/* </div> */}
                </Link>
            </div>
            {/* <h1>Pick From One Of Our Categories</h1> */}
        </div>
    )
}