import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./Header.styles.scss";

const Header = () => {
	return (
		<header className="header">
			<div className="logo-cont">
				<Link to="/">
					<Logo />
				</Link>
			</div>
			<nav className="nav-links">
				<Link to="/shop">SHOP</Link>
				<Link to="/login">LOGIN</Link>
			</nav>
		</header>
	);
};

export default Header;
