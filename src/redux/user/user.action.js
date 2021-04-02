import userActionTypes from "./user.types";

export const setCurrentUser = (user) => ({
	type: userActionTypes.SET_CURRENT_USER,
	payload: user,
});

export const googleSignInStart = () => ({
	type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const googleSignInSuccess = (user) => ({
	type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
	payload: user,
});

export const googleSignInFailure = (error) => ({
	type: userActionTypes.GOOGLE_SIGNIN_FAILURE,
	payload: error,
});

export const epSignInStart = (emailPassword) => ({
	type: userActionTypes.EP_SIGNIN_START,
	payload: emailPassword,
});

export const epSignInSuccess = (user) => ({
	type: userActionTypes.EP_SIGNIN_SUCCESS,
	payload: user,
});

export const epSignInFailure = (error) => ({
	type: userActionTypes.EP_SIGNIN_FAILURE,
	payload: error,
});
