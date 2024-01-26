import "./index.sass";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
// sk_test_51Nm6bFCLklXeQhBqY4FZoa4MShDWGUkM98Xf2Aj9kpbLkR8hL4WqVbcgz7mYNGZCDfubaS8diP7mSNbajtc7xOR600n9z3Ua5B


const CheckoutForm = () => {
    const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        return;
    }

    const result = await stripe.confirmPayment({elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });


    if (result.error) {
        console.log(result.error.message);
    } else {}
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button className="submit">Submit</button>
    </form>
  );
};


const stripePromise = loadStripe('pk_test_51Nm6bFCLklXeQhBqR2omurdvd4Js1IZ2X41rc3edLkAYDrjkz4FpHjtPlTmlQsKVwVKTyrC8abS74OAPqmeso1IT00MEZ3Rboo');

export default function Payment () {
    const options = {
        appearance: {},
        mode: 'payment',
        currency: 'usd',
        amount: 6500,
        // passing the client secret obtained from the server
        // clientSecret: '{{CLIENT_SECRET}}',
      };
    return (
        <div className="Payment page">
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements>
        </div>
    )
}