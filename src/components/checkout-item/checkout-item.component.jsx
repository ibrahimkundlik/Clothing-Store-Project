//react
import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item: { imageUrl, name, price, quantity } }) => {
	return (
		<div className="checkout-item">
			<div className="item-img">
				<img src={`${imageUrl}`} alt={name} />
			</div>
			<p>{name}</p>
			<p>{quantity}</p>
			<p>${price}</p>
			<p>❌</p>
		</div>
	);
};

export default CheckoutItem;
