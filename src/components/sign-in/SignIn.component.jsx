import React from "react";
import FormInput from "../form-input/FormInput.component";
import CustomBtn from "../custom-btn/CustomBtn.component";
import "./SignIn.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit");
		signInWithGoogle();
	};

	render() {
		return (
			<div className="signIn-cont">
				<h2>I already have an account</h2>
				<p>Sign in with your email and password</p>
				<form onSubmit={this.handleSubmit}>
					<FormInput type="email" name="Email" id="sign-in-email" required />
					<FormInput
						type="password"
						name="Password"
						id="sign-in-password"
						required
					/>
					<CustomBtn type="submit"> SIGN IN </CustomBtn>
					<CustomBtn type="button" googleAuth onClick={signInWithGoogle}>
						SIGN IN WITH GOOGLE
					</CustomBtn>
				</form>
			</div>
		);
	}
}

export default SignIn;
