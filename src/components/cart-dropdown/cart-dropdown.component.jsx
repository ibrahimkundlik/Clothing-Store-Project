//react
import React from "react";
import CustomBtn from "../custom-btn/CustomBtn.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
//react-router
import { withRouter } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { setCartToggle } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length === 0 ? (
					<p className="empty-cart">Cart is empty !</p>
				) : (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				)}
			</div>
			<CustomBtn
				onClick={() => {
					dispatch(setCartToggle());
					history.push("/checkout");
				}}
			>
				CHECKOUT
			</CustomBtn>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
