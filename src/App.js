import React from "react";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shoppage/ShopPage.component";
import { Route } from "react-router-dom";
import Header from "./components/header/Header.component";
import "./App.scss";

function App() {
	return (
		<div>
			<Header />
			<Route exact path="/" component={HomePage} />
			<Route exact path="/shop" component={ShopPage} />
		</div>
	);
}

export default App;
