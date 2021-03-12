import React from "react";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
//redux
import { connect } from "react-redux";
import { setCartToggle } from "../../redux/cart/cart.action";

const CartIcon = ({ setCartToggle }) => {
	return (
		<div className="nav-link cart-icon" onClick={setCartToggle}>
			<ShopIcon />
			<p className="cart-count">0</p>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setCartToggle: () => dispatch(setCartToggle()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
