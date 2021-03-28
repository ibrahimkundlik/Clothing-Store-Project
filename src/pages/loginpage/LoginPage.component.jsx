import React from "react";
import SignIn from "../../components/sign-in/SignIn.component";
import Register from "../../components/register/Register.component";
//styled-components
import { LoginPageContainer } from "./LoginPage.styles";

const LoginPage = () => {
	return (
		<LoginPageContainer>
			<SignIn />
			<Register />
		</LoginPageContainer>
	);
};

export default LoginPage;
