import React from "react";
import SignIn from "../../components/sign-in/SignIn.component";
import Register from "../../components/register/Register.component";
//styled-components
import { LoginPageContainer } from "./LoginPage.styles";
//redux
import { createStructuredSelector } from "reselect";
import { selectErrorState } from "../../redux/user/user.selector";
import { connect } from "react-redux";

const LoginPage = ({ errorState }) => {
	return (
		<LoginPageContainer>
			<SignIn checkError={errorState ? errorState.signin : null} />
			<Register checkError={errorState ? errorState.signup : null} />
		</LoginPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	errorState: selectErrorState,
});

export default connect(mapStateToProps)(LoginPage);
