//react
import React, { useEffect } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartPrice,
} from "../../redux/cart/cart.selector";
//stripe
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
//styled-components
import {
	CheckoutPageContainer,
	HeaderContainer,
	ItemsContainer,
	TotalContainer,
	StripeMssgContainer,
} from "./Checkout.styles";

const CheckoutPage = ({ cartItems, price }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<CheckoutPageContainer>
			<HeaderContainer>
				<p>Product</p>
				<p>Description</p>
				<p>Quantity</p>
				<p>Price</p>
				<p>Remove</p>
			</HeaderContainer>
			<ItemsContainer>
				{cartItems.map((item) => (
					<CheckoutItem key={item.id} item={item} />
				))}
			</ItemsContainer>
			<TotalContainer>
				<h1>Total = ${price}</h1>
			</TotalContainer>
			<StripeMssgContainer>
				<p>*Please use below details for payments*</p>
				<p>
					Card Number: <span>4242424242424242</span>
				</p>
				<p>
					Date: <span>Any future date</span>
				</p>
				<p>
					CVC: <span>Any 3 digits</span>
				</p>
				<StripeCheckoutButton price={price} />
			</StripeMssgContainer>
		</CheckoutPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	price: selectCartPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
