//react
import React from "react";
//firebase
import { auth } from "../../firebase/firebase.utils";
//components
import FormInput from "../form-input/FormInput.component";
import CustomBtn from "../custom-btn/CustomBtn.component";
//styled-components
import { SignInContainer } from "./SignIn.styles";
//redux-saga
import { googleSignInStart } from "../../redux/user/user.action";
import { connect } from "react-redux";

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
			error: false,
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
		const { googleSignInStart } = this.props;
		return (
			<SignInContainer>
				<h2>I already have an account</h2>
				<p>Sign in with your email and password</p>
				{this.state.error ? (
					<p className="signin-error">
						We couldn't sign you in. Email or Password is incorrect. ⚠️
					</p>
				) : null}
				<form onSubmit={this.handleSubmit} autoComplete="off">
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
					<CustomBtn type="button" googleAuth onClick={googleSignInStart}>
						SIGN IN WITH GOOGLE
					</CustomBtn>
				</form>
			</SignInContainer>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
