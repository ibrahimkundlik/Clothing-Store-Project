import React from "react";
//styled-components
import {
	CartItemContainer,
	ItemImg,
	ItemInfo,
	ItemName,
	ItemQuantity,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, name, quantity, price } }) => {
	return (
		<CartItemContainer>
			<ItemImg>
				<img src={`${imageUrl}`} alt={name} />
			</ItemImg>
			<ItemInfo>
				<ItemName>{name}</ItemName>
				<ItemQuantity>
					{quantity} x ${price}
				</ItemQuantity>
			</ItemInfo>
		</CartItemContainer>
	);
};

export default CartItem;
