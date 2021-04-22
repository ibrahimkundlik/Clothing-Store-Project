import React from "react";
import { SpinnerContainer } from "./spinner.styles";

const Spinner = (WrappedComponent) => ({
	isLoading,
	errorMessage,
	...otherProps
}) => {
	return isLoading ? (
		<div style={{ textAlign: "center", width: "100%" }}>
			<SpinnerContainer />
		</div>
	) : errorMessage ? (
		<h2 style={{ textAlign: "center", fontSize: "1rem" }}>{errorMessage}</h2>
	) : (
		<WrappedComponent {...otherProps} />
	);
};

export default Spinner;
