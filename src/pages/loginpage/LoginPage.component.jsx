import React from "react";
import SignIn from "../../components/sign-in/SignIn.component";
import Register from "../../components/register/Register.component";
import "./LoginPage.styles.scss";

const LoginPage = () => {
	return (
		<div className="loginpage">
			<SignIn />
			<Register />
		</div>
	);
};

export default LoginPage;
