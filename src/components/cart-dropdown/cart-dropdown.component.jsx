import React from "react";
import CustomBtn from "../custom-btn/CustomBtn.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items"></div>
			<CustomBtn>CHECKOUT</CustomBtn>
		</div>
	);
};

export default CartDropdown;
