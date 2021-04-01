import React from "react";

const Spinner = (WrappedComponent) => ({
	isLoading,
	errorMessage,
	...otherProps
}) => {
	return isLoading ? (
		<h2 style={{ textAlign: "center", fontSize: "2rem" }}>Loading...</h2>
	) : errorMessage ? (
		<h2 style={{ textAlign: "center", fontSize: "1rem" }}>{errorMessage}</h2>
	) : (
		<WrappedComponent {...otherProps} />
	);
};

export default Spinner;
