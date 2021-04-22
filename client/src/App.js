//react
import React, { lazy, Suspense, useEffect } from "react";
//react-router
import { Route, Switch, Redirect } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";
import { createStructuredSelector } from "reselect";
//components
import Header from "./components/header/Header.component";
import Spinner from "./components/spinner/spinner.component";
import { GlobalStyles } from "./css/global.styles";
//lazy loading
const HomePage = lazy(() => import("./pages/homepage/HomePage.component"));
const ShopPage = lazy(() => import("./pages/shoppage/ShopPage.component"));
const LoginPage = lazy(() => import("./pages/loginpage/LoginPage.component"));
const CheckoutPage = lazy(() =>
	import("./pages/checkoutpage/Checkout.component")
);

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div className="app-container">
			<GlobalStyles />
			<Header />
			<Switch>
				<Suspense fallback={<Spinner />}>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/login"
						render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
					/>
				</Suspense>
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
