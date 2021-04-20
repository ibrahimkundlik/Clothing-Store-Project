//react
import React, { useEffect } from "react";
//react-router
import { Route, Switch, Redirect } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";
import { createStructuredSelector } from "reselect";
//components
import Header from "./components/header/Header.component";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shoppage/ShopPage.component";
import LoginPage from "./pages/loginpage/LoginPage.component";
import CheckoutPage from "./pages/checkoutpage/Checkout.component";
import { GlobalStyles } from "./css/global.styles";

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div className="app-container">
			<GlobalStyles />
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route
					exact
					path="/login"
					render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
				/>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
