//react
import React from "react";
//firebase
import { auth, createUserProfile } from "../../firebase/firebase.utils";
//components
import FormInput from "../form-input/FormInput.component";
import CustomBtn from "../custom-btn/CustomBtn.component";
//styled-components
import { RegisterContainer } from "./Register.styles";

class Register extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
			error: false,
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;
		const photoURL = `https://ui-avatars.com/api/?background=random&name=${displayName}`;

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfile(user, { displayName, photoURL });
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
				error: false,
			});
		} catch (error) {
			this.setState({
				error: true,
			});
		}
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<RegisterContainer>
				<h2>I do not have an account</h2>
				<p>Sign up with your email and password</p>
				{this.state.error ? (
					<p className="register-error">
						The email address is already in use by another account. ⚠️
					</p>
				) : null}
				<form onSubmit={this.handleSubmit} autoComplete="off">
					<FormInput
						type="text"
						name="displayName"
						label="Display Name"
						id="display-name"
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="email"
						name="email"
						label="Email"
						id="sign-up-email"
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="password"
						label="Password"
						id="sign-up-password"
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						label="Confirm Password"
						id="confirm-password"
						onChange={this.handleChange}
						required
					/>
					<CustomBtn type="submit"> SIGN UP </CustomBtn>
				</form>
			</RegisterContainer>
		);
	}
}

export default Register;
