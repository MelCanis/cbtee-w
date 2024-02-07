import { useEffect } from "react";
import "./index.sass";
import { useSearchParams } from "react-router-dom";
import { disableProducts } from "../../../server/script";

export default function Success () {
    const [queries] = useSearchParams();
    useEffect(_ => {
        const sessionID = queries.get("session_id");
        disableProducts(sessionID).then(x => console.log(x))
    }, [])
    return (
        <div className="Success page">
            <img src="/assets/images/dalmation.jpg" alt="" />
            <div>
                <h1>Payment Success!</h1>
                <p>The products you have ordered will be shipped soon.</p>
            </div>
        </div>
    )
}