import { cartActionType } from "./cart.types";

export const setCartToggle = () => ({
	type: cartActionType.TOGGLE_CART_DROPDOWN,
});

export const addItemsToCart = (item) => ({
	type: cartActionType.ADD_ITEM,
	payload: item,
});

export const removeItemsFromCart = (item) => ({
	type: cartActionType.REMOVE_ITEM,
	payload: item,
});

export const deleteItemFromCart = (item) => ({
	type: cartActionType.DELETE_ITEM_FROM_CART,
	payload: item,
});
