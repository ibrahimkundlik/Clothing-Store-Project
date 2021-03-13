//react
import React from "react";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
//redux
import { connect } from "react-redux";
import { setCartToggle } from "../../redux/cart/cart.action";
import { selectCartCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ setCartToggle, itemCount }) => {
	return (
		<div className="nav-link cart-icon" onClick={setCartToggle}>
			<ShopIcon />
			<p className="cart-count">{itemCount}</p>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setCartToggle: () => dispatch(setCartToggle()),
});

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
