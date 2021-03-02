import React from "react";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shoppage/ShopPage.component";
import { Route, Redirect } from "react-router-dom";
import Header from "./components/header/Header.component";
import "./App.scss";
import LoginPage from "./pages/loginpage/LoginPage.component";
import { auth, createUserProfile } from "./firebase/firebase.utils";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
			isLoading: true,
		};
	}

	unsubscribeFromAuth = null;
	// setting oauth
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfile(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
						isLoading: false,
					});
				});
			} else {
				this.setState({ currentUser: userAuth, isLoading: false });
			}
		});
	}
	// removing oauth
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="main-container">
				<Header
					currentUser={this.state.currentUser}
					isLoading={this.state.isLoading}
				/>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				{this.state.currentUser ? (
					<Redirect to="/" />
				) : (
					<Route exact path="/login" component={LoginPage} />
				)}
			</div>
		);
	}
}

export default App;
