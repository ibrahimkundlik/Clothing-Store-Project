//react
import React from "react";
import ReactDOM from "react-dom";
//react-router
import { BrowserRouter } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import store from "./redux/store";
//components
import "./index.scss";
import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
