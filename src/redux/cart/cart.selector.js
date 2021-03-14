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

export const selectCartPrice = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
);
