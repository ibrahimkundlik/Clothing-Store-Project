//react
import React from "react";
//stripe
import StripeCheckout from "react-stripe-checkout";
//axios
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
	const centPrice = price * 100;
	const pubKey =
		"pk_test_51IW2KCKDwFBXv9KbhejkGrrqrFIVkoZ46AAEPQ1JJBL7PHlV7SsBFClo9H2Nibb4JBIph4aZYPiFFxbzJXpkepKK00CNFemUSW";

	const onToken = (token) => {
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: centPrice,
				token,
			},
		})
			.then((response) => {
				alert("PAYMENT SUCCESSFUL");
			})
			.catch((error) => {
				console.log(error);
				alert(
					"PAYMENT FAILED. Please make sure to use the provided credit card for payments."
				);
			});
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
		/>
	);
};

export default StripeCheckoutButton;
