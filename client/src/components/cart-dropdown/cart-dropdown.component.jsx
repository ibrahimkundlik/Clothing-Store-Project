//react
import React, { useRef } from "react";
import CustomBtn from "../custom-btn/CustomBtn.component";
import CartItem from "../cart-item/cart-item.component";
//styled-components
import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles";
//react-router
import { withRouter } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { setCartToggle } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";
import { useClickOutside } from "./useClickOutside.js";

const CartDropdown = ({ cartItems, history, dispatch }) => {
	const ref = useRef();

	useClickOutside(ref, () => dispatch(setCartToggle()));

	return (
		<CartDropdownContainer ref={ref}>
			<CartItems>
				{cartItems.length === 0 ? (
					<p className="empty-cart">Cart is empty !</p>
				) : (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				)}
			</CartItems>
			<CustomBtn
				onClick={() => {
					dispatch(setCartToggle());
					history.push("/checkout");
				}}
			>
				CHECKOUT
			</CustomBtn>
		</CartDropdownContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
