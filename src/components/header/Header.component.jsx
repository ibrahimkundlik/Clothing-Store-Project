import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./Header.styles.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, isLoading }) => {
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
				) : isLoading ? null : (
					<Link to="/login" className="nav-link">
						LOGIN
					</Link>
				)}
			</nav>
		</header>
	);
};

export default Header;
