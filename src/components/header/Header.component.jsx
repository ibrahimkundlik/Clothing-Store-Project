//react
import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
//react-router
import { Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHiddenStatus } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { SignOutStart } from "../../redux/user/user.action";
//components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
//styled-components
import {
	HeaderContainer,
	LogoContainer,
	NavContainer,
	NavLink,
} from "./Header.styles";

const Header = ({ currentUser, hidden, SignOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer>
				<Link to="/">
					<Logo />
				</Link>
			</LogoContainer>
			<NavContainer>
				<NavLink to="/shop">SHOP</NavLink>
				{currentUser ? (
					<NavLink as="div" onClick={SignOutStart}>
						SIGN OUT
					</NavLink>
				) : (
					<NavLink to="/login">LOGIN</NavLink>
				)}
				<NavLink as="div">
					<CartIcon />
				</NavLink>
			</NavContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

//access redux state from below fn
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectHiddenStatus,
});

const mapDispatchToProps = (dispatch) => ({
	SignOutStart: () => dispatch(SignOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
