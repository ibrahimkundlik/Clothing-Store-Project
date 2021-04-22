import React from "react";
import Spinner from "../spinner/spinner.component";

const WithSpinner = (WrappedComponent) => ({
	isLoading,
	errorMessage,
	...otherProps
}) => {
	return isLoading ? (
		<Spinner />
	) : errorMessage ? (
		<h2 style={{ textAlign: "center", fontSize: "1rem" }}>{errorMessage}</h2>
	) : (
		<WrappedComponent {...otherProps} />
	);
};

export default WithSpinner;
