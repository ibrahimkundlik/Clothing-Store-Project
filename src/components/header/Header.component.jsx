//react
import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
//react-router
import { Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
//firebase
import { auth } from "../../firebase/firebase.utils";
//css
import "./Header.styles.scss";

const Header = ({ currentUser }) => {
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
					<button className="nav-link" onClick={() => auth.signOut()}>
						SIGN OUT
					</button>
				) : (
					<Link to="/login" className="nav-link">
						LOGIN
					</Link>
				)}
			</nav>
		</header>
	);
};

//access redux state from below fn
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
