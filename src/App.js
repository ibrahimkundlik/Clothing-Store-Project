//react
import React from "react";
//react-router
import { Route, Switch, Redirect } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
//firebase
import { auth, createUserProfile } from "./firebase/firebase.utils";
//components
import Header from "./components/header/Header.component";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shoppage/ShopPage.component";
import LoginPage from "./pages/loginpage/LoginPage.component";
import "./App.scss";

class App extends React.Component {
	unsubscribeFromAuth = null;
	//setting OAUTH
	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfile(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}
	//removing OAUTH
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="main-container">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
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

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
