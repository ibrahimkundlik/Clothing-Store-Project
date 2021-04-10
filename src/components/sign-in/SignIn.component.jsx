//react
import React, { useState } from "react";
//components
import FormInput from "../form-input/FormInput.component";
import CustomBtn from "../custom-btn/CustomBtn.component";
//styled-components
import { SignInContainer } from "./SignIn.styles";
//redux
import { selectErrorState } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
//redux-saga
import { googleSignInStart, epSignInStart } from "../../redux/user/user.action";

const SignIn = ({ googleSignInStart, epSignInStart, signinError }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		epSignInStart(email, password);
	};

	return (
		<SignInContainer>
			<h2>I already have an account</h2>
			<p>Sign in with your email and password</p>
			<p className="signin-error">
				{!signinError
					? null
					: signinError.code === "auth/network-request-failed"
					? "We couldn't sign you in. Network Error. ⚠️"
					: "We couldn't sign you in. Email or Password is incorrect. ⚠️"}
			</p>
			<form onSubmit={handleSubmit} autoComplete="off">
				<FormInput
					type="email"
					name="email"
					label="Email"
					id="sign-in-email"
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<FormInput
					type="password"
					name="password"
					label="Password"
					id="sign-in-password"
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<CustomBtn type="submit"> SIGN IN </CustomBtn>
				<CustomBtn type="button" googleAuth onClick={googleSignInStart}>
					SIGN IN WITH GOOGLE
				</CustomBtn>
			</form>
		</SignInContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	signinError: selectErrorState,
});

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	epSignInStart: (email, password) =>
		dispatch(epSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
