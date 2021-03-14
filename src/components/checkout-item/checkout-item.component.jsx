//react
import React from "react";
import "./checkout-item.styles.scss";
import CustomBtn from "../custom-btn/CustomBtn.component";
//redux
import { connect } from "react-redux";
import { removeItemFromCart } from "../../redux/cart/cart.action";

const CheckoutItem = ({ item, removeItemFromCart }) => {
	const { imageUrl, name, price, quantity } = item;
	return (
		<div className="checkout-item">
			<div className="item-img">
				<img src={`${imageUrl}`} alt={name} />
			</div>
			<p>{name}</p>
			<p>
				<CustomBtn>&lt;</CustomBtn>
				{quantity}
				<CustomBtn>&gt;</CustomBtn>
			</p>
			<p>${price}</p>
			<p>
				<span>Remove </span>
				<CustomBtn onClick={() => removeItemFromCart(item)}>❌</CustomBtn>
			</p>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
