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
	payload: error,
});
