import React from "react";
import "./Register.styles.scss";
import FormInput from "../form-input/FormInput.component";
import CustomBtn from "../custom-btn/CustomBtn.component";

class Register extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	render() {
		return (
			<div className="register-cont">
				<h2>I do not have an account</h2>
				<p>Sign up with your email and password</p>
				<form>
					<FormInput
						type="text"
						name="Display Name"
						id="display-name"
						required
					/>
					<FormInput type="email" name="Email" id="sign-up-email" required />
					<FormInput
						type="password"
						name="Password"
						id="sign-up-password"
						required
					/>
					<FormInput
						type="password"
						name="Confirm Password"
						id="confirm-password"
						required
					/>
					<CustomBtn type="submit"> SIGN UP </CustomBtn>
				</form>
			</div>
		);
	}
}

export default Register;
