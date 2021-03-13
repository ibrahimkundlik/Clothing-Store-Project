import React from "react";
import CustomBtn from "../custom-btn/CustomBtn.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
//redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</div>
			<CustomBtn>CHECKOUT</CustomBtn>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
