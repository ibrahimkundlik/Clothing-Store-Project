import React from "react";
import FormInput from "../form-input/FormInput.component";
import CustomBtn from "../custom-btn/CustomBtn.component";
import "./SignIn.styles.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: "",
				password: "",
			});
		} catch (error) {
			console.log("Error logging in", error);
			this.setState({
				email: "",
				password: "",
			});
		}
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="signIn-cont">
				<h2>I already have an account</h2>
				<p>Sign in with your email and password</p>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						label="Email"
						id="sign-in-email"
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="password"
						label="Password"
						id="sign-in-password"
						onChange={this.handleChange}
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
