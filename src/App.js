//react
import React from "react";
//react-router
import { Route, Switch, Redirect } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
//components
import Header from "./components/header/Header.component";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shoppage/ShopPage.component";
import LoginPage from "./pages/loginpage/LoginPage.component";
import CheckoutPage from "./pages/checkoutpage/Checkout.component";

class App extends React.Component {
	unsubscribeFromAuth = null;
	//setting OAUTH
	componentDidMount() {
		const { setCurrentUser } = this.props;
	}
	//removing OAUTH
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="app-container">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/login"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <LoginPage />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
