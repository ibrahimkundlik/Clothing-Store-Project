import { cartActionType } from "./cart.types";

export const setCartToggle = () => ({
	type: cartActionType.TOGGLE_CART_DROPDOWN,
});
