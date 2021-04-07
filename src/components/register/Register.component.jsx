//react
import React from "react";
//components
import FormInput from "../form-input/FormInput.component";
import CustomBtn from "../custom-btn/CustomBtn.component";
//styled-components
import { RegisterContainer } from "./Register.styles";
//redux-saga
import { SignUpStart } from "../../redux/user/user.action";
import { connect } from "react-redux";

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

		const { SignUpStart } = this.props;
		const { displayName, email, password, confirmPassword } = this.state;
		const photoURL = `https://ui-avatars.com/api/?background=random&name=${displayName}`;

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		SignUpStart({ displayName, email, password, photoURL });
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

const mapDispatchToProps = (dispatch) => ({
	SignUpStart: (signUpDetails) => dispatch(SignUpStart(signUpDetails)),
});

export default connect(null, mapDispatchToProps)(Register);
