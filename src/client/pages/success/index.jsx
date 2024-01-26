import "./index.sass";

export default function Success () {
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