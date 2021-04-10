//react
import React, { useState } from "react";
//components
import FormInput from "../form-input/FormInput.component";
import CustomBtn from "../custom-btn/CustomBtn.component";
//styled-components
import { RegisterContainer } from "./Register.styles";
//redux
import { createStructuredSelector } from "reselect";
import { selectErrorState } from "../../redux/user/user.selector";
//redux-saga
import { SignUpStart } from "../../redux/user/user.action";
import { connect } from "react-redux";

const Register = ({ SignUpStart, SignUpError }) => {
	const [userCreds, setUserCreds] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
		passwordError: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = userCreds;
		if (password !== confirmPassword || password.length < 6) {
			setUserCreds({ ...userCreds, passwordError: true });
			return;
		} else {
			setUserCreds({ ...userCreds, passwordError: false });
		}
		const photoURL = `https://ui-avatars.com/api/?background=random&name=${displayName}`;

		SignUpStart({ displayName, email, password, photoURL });
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setUserCreds({ ...userCreds, [name]: value });
	};

	return (
		<RegisterContainer>
			<h2>I do not have an account</h2>
			<p>Sign up with your email and password</p>

			<p className="register-error">
				{!SignUpError
					? null
					: SignUpError.code === "auth/email-already-in-use"
					? "The email address is already in use by another account. ⚠️"
					: SignUpError.code === "auth/invalid-email"
					? "Please enter a valid email address. ⚠️"
					: "We couldn't register your account. Network Error. ⚠️"}
			</p>

			<form onSubmit={handleSubmit} autoComplete="off">
				<FormInput
					type="text"
					name="displayName"
					label="Display Name"
					id="display-name"
					onChange={handleChange}
					required
				/>
				<FormInput
					type="email"
					name="email"
					label="Email"
					id="sign-up-email"
					onChange={handleChange}
					required
				/>
				<FormInput
					type="password"
					name="password"
					label="Password"
					id="sign-up-password"
					onChange={handleChange}
					required
				/>
				{userCreds.passwordError ? (
					<p style={{ margin: "0 0 1rem 0" }} className="register-error">
						Password should be at least 6 characters and both passwords should
						match ⚠️
					</p>
				) : null}
				<FormInput
					type="password"
					name="confirmPassword"
					label="Confirm Password"
					id="confirm-password"
					onChange={handleChange}
					required
				/>
				<CustomBtn type="submit"> SIGN UP </CustomBtn>
			</form>
		</RegisterContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	SignUpError: selectErrorState,
});

const mapDispatchToProps = (dispatch) => ({
	SignUpStart: (signUpDetails) => dispatch(SignUpStart(signUpDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
