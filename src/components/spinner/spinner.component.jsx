import React from "react";

const Spinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
	return isLoading ? (
		<h2 style={{ textAlign: "center", fontSize: "2rem" }}>Loading...</h2>
	) : (
		<WrappedComponent {...otherProps} />
	);
};

export default Spinner;
