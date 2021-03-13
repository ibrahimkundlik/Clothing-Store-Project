import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectHiddenStatus = createSelector(
	[selectCart],
	(cart) => cart.hidden
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((count, item) => count + item.quantity, 0)
);
