import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, name, quantity, price } }) => {
	return (
		<div className="cart-item">
			<div className="item-img">
				<img src={`${imageUrl}`} alt={name} />
			</div>
			<div className="item-info">
				<p className="item-name">{name}</p>
				<p className="item-quantity">
					{quantity} x ${price}
				</p>
			</div>
		</div>
	);
};

export default CartItem;
