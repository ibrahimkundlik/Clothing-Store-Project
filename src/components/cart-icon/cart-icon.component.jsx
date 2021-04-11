//react
import React from "react";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
//styled-components
import { CartIconContainer, CartCount } from "./cart-icon.styles";
//redux
import { connect } from "react-redux";
import { setCartToggle } from "../../redux/cart/cart.action";
import { selectCartCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ setCartToggle, itemCount }) => {
	return (
		<CartIconContainer onClick={setCartToggle}>
			<ShopIcon />
			<CartCount>{itemCount}</CartCount>
		</CartIconContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setCartToggle: () => dispatch(setCartToggle()),
});

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
