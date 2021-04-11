import React from "react";
import { InputContainer } from "./FormInput.styles";

const FormInput = ({ id, label, ...otherProps }) => {
	return (
		<InputContainer>
			<input id={id} {...otherProps} />
			<label htmlFor={id}>{label}</label>
		</InputContainer>
	);
};

export default FormInput;
