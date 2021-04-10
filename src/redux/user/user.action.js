import userActionTypes from "./user.types";

export const googleSignInStart = () => ({
	type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const epSignInStart = (emailPassword) => ({
	type: userActionTypes.EP_SIGNIN_START,
	payload: emailPassword,
});

export const SignInSuccess = (user) => ({
	type: userActionTypes.SIGNIN_SUCCESS,
	payload: user,
});

export const SignInFailure = (error) => ({
	type: userActionTypes.SIGNIN_FAILURE,
	payload: { signin: error },
});

export const checkUserSession = () => ({
	type: userActionTypes.CHECK_USER_SESSION,
});

export const SignOutStart = () => ({
	type: userActionTypes.SIGNOUT_START,
});

export const SignOutSuccess = () => ({
	type: userActionTypes.SIGNOUT_SUCCESS,
});

export const SignOutFailure = (error) => ({
	type: userActionTypes.SIGNOUT_FAILURE,
	payload: { signout: error },
});

export const SignUpStart = (signUpDetails) => ({
	type: userActionTypes.SIGNUP_START,
	payload: signUpDetails,
});

export const SignUpSuccess = ({ user, additionalData }) => ({
	type: userActionTypes.SIGNUP_SUCCESS,
	payload: { user, additionalData },
});

export const SignUpFailure = (error) => ({
	type: userActionTypes.SIGNUP_FAILURE,
	payload: { signup: error },
});
