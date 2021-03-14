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
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	price: selectCartPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
