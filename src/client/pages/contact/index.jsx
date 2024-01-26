import "./index.sass";

export default function Contact () {
    return (
        <div className="Contact page">
            <p>Ms. Ray Thompson is the creator & seller of <i>Connecting Back to Earth Elements</i> Stone & Crystal Jewelry. Her signature stone is the dalmation stone which balances the energies of the other stones.</p>
            <h4>Contact for Inquiries</h4>
            <div className="form">
                <label>Email</label>
                <input type="text" placeholder="Type email here..." />
                <label>Phone</label>
                <input type="text" placeholder="Type phone number here..." />
                <label>Message</label>
                <textarea type="text" placeholder="Type message here..."/>
            </div>
        </div>
    )
}