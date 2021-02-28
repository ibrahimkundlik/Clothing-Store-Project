import React from "react";
import FormInput from "../form-input/FormInput.component";
import CustomBtn from "../custom-btn/CustomBtn.component";
import "./SignIn.styles.scss";

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
		};
	}

	render() {
		return (
			<div className="signIn-cont">
				<h2>I already have an account</h2>
				<p>Sign in with your email and password</p>
				<form>
					<FormInput type="email" name="Email" id="sign-in-email" required />
					<FormInput
						type="password"
						name="Password"
						id="sign-in-password"
						required
					/>
					<CustomBtn text="SIGN IN" />
					<CustomBtn text="SIGN IN WITH GOOGLE" />
				</form>
			</div>
		);
	}
}

export default SignIn;
