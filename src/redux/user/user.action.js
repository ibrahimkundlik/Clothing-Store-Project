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
	payload: error,
});
