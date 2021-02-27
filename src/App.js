import React from "react";
import HomePage from "./pages/homepage/HomePage.component";
import { Route } from "react-router-dom";
import "./App.scss";

function App() {
	return (
		<div>
			<Route exact path="/" component={HomePage} />
		</div>
	);
}

export default App;
