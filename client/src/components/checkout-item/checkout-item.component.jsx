//react
import React from "react";
import CustomBtn from "../custom-btn/CustomBtn.component";
//styled-components
import { ItemImg, CheckoutItemContainer } from "./checkout-item.styles";
//redux
import { connect } from "react-redux";
import {
	addItemsToCart,
	removeItemsFromCart,
	deleteItemFromCart,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({
	item,
	addItemsToCart,
	removeItemsFromCart,
	deleteItemFromCart,
}) => {
	const { imageUrl, name, price, quantity } = item;
	return (
		<CheckoutItemContainer>
			<ItemImg>
				<img src={`${imageUrl}`} alt={name} />
			</ItemImg>
			<p>{name}</p>
			<p>
				<CustomBtn onClick={() => removeItemsFromCart(item)}>&lt;</CustomBtn>
				{quantity}
				<CustomBtn onClick={() => addItemsToCart(item)}>&gt;</CustomBtn>
			</p>
			<p>${price}</p>
			<p>
				<span>Remove </span>
				<CustomBtn onClick={() => deleteItemFromCart(item)}>❌</CustomBtn>
			</p>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItemsToCart: (item) => dispatch(addItemsToCart(item)),
	removeItemsFromCart: (item) => dispatch(removeItemsFromCart(item)),
	deleteItemFromCart: (item) => dispatch(deleteItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
