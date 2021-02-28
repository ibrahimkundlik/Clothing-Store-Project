import React from "react";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shoppage/ShopPage.component";
import { Route } from "react-router-dom";
import Header from "./components/header/Header.component";
import "./App.scss";
import LoginPage from "./pages/loginpage/LoginPage.component";

function App() {
	return (
		<div className="main-container">
			<Header />
			<Route exact path="/" component={HomePage} />
			<Route exact path="/shop" component={ShopPage} />
			<Route exact path="/login" component={LoginPage} />
		</div>
	);
}

export default App;
