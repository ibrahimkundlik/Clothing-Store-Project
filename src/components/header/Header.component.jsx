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
import "./Header.styles.scss";

const Header = ({ currentUser, hidden }) => {
	return (
		<header className="header">
			<div className="logo-cont">
				<Link to="/">
					<Logo />
				</Link>
			</div>
			<nav className="nav-links">
				<Link className="nav-link" to="/shop">
					SHOP
				</Link>
				{currentUser ? (
					<div className="nav-link" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link to="/login" className="nav-link">
						LOGIN
					</Link>
				)}
				<CartIcon />
			</nav>
			{hidden ? null : <CartDropdown />}
		</header>
	);
};

//access redux state from below fn
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectHiddenStatus,
});

export default connect(mapStateToProps)(Header);
