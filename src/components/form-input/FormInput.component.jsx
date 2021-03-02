import React from "react";
import "./FormInput.styles.scss";

const FormInput = ({ id, label, ...otherProps }) => {
	return (
		<div className="input-cont">
			<input id={id} {...otherProps} />
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

export default FormInput;
