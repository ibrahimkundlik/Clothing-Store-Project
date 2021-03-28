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
//firebase
import { auth } from "../../firebase/firebase.utils";
//components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
//styled-components
import {
	HeaderContainer,
	LogoContainer,
	NavContainer,
	NavLink,
	NavDiv,
} from "./Header.styles";

const Header = ({ currentUser, hidden }) => {
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
					<NavDiv onClick={() => auth.signOut()}>SIGN OUT</NavDiv>
				) : (
					<NavLink to="/login">LOGIN</NavLink>
				)}
				<NavDiv>
					<CartIcon />
				</NavDiv>
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

export default connect(mapStateToProps)(Header);
