//react
import React from "react";
//stripe
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const centPrice = price * 100;
	const pubKey =
		"pk_test_51IW2KCKDwFBXv9KbhejkGrrqrFIVkoZ46AAEPQ1JJBL7PHlV7SsBFClo9H2Nibb4JBIph4aZYPiFFxbzJXpkepKK00CNFemUSW";
	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful.");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN CLOTHING"
			billingAddress
			shippingAddress
			image="https://ui-avatars.com/api/?background=random&name=cc"
			description={`Your total is $${price}`}
			amount={centPrice}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={pubKey}
			allowRememberMe={false}
		/>
	);
};

export default StripeCheckoutButton;
