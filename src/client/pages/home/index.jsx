import Categories from "./components/categories";
import Hero from "./components/hero";
import "./index.sass";
import Dalmation from "/assets/images/dalmation-icon.png"

export default function Home () {
    return (
        <div className="Home page">
            <Hero />
            <Categories />
            <div className="homeAbout">
                <div className="img">
                    <img src={Dalmation} alt="" />
                </div>
                <p>CRYSTALS AND STONES ARE POWERFUL
    TOOLS THAT CAN HELP FIND A STATE OF HARMONY AND HEALTH. ALL NATURAL THINGS IN THE UNIVERSE AID IN
    BALANCE, HEALTH AND COHESION. WHEN YOU WEAR A CRYSTAL, IT WILL GRADUALLY BALANCE YOUR OWN ENERGY. STONES ARE FORMED THROUGH THOUSANDS OF YEARS
    OF EVOLUTION, AND THEY HAVE A HARMONIOUS BALANCE VIBRATION. CRYSTAL HEALS THE BODY WHICH IS THE PHYSICAL HEALS THE MIND IS THE BRAIN'S AND THE NERVOUS SYSTEM IS THE SPIRIT IS PURELY ON A HIGHER POWER.</p>
            </div>
        </div>
    )
}