import Categories from "./components/categories";
import Hero from "./components/hero";
import "./index.sass";

export default function Home () {
    return (
        <div className="Home page">
            <Hero />
            <Categories />
        </div>
    )
}