import React from "react";
import "./FormInput.styles.scss";

const FormInput = ({ id, name, ...otherProps }) => {
	return (
		<div className="input-cont">
			<input id={id} {...otherProps} />
			<label htmlFor={id}>{name}</label>
		</div>
	);
};

export default FormInput;
