//react
import React from "react";
import "./Checkout.styles.scss";
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

const CheckoutPage = ({ cartItems, price }) => {
	return (
		<div className="checkout-page">
			<div className="headers">
				<p>Product</p>
				<p>Description</p>
				<p>Quantity</p>
				<p>Price</p>
				<p>Remove</p>
			</div>
			<div className="items-cont">
				{cartItems.map((item) => (
					<CheckoutItem key={item.id} item={item} />
				))}
			</div>
			<div className="total-price">
				<h1>Total = ${price}</h1>
			</div>
			<div className="stripe-mssg">
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
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	price: selectCartPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
