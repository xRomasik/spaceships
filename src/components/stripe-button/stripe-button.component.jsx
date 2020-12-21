import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51I0qXoEvGn95HTFq6t3RPvufqgse7BvcOGRAc0jREH6sDvR0egTGwQTNhzDI4r1VKOVzDxUXaEK48UDxJj6L6ch000wwVaD5Eq'

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
};

export default StripeCheckoutButton;