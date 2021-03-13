import { cartActionType } from "./cart.types";

export const setCartToggle = () => ({
	type: cartActionType.TOGGLE_CART_DROPDOWN,
});

export const addItemsToCart = (item) => ({
	type: cartActionType.ADD_ITEM,
	payload: item,
});
