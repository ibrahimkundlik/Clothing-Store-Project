import userActionTypes from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
	error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.GOOGLE_SIGNIN_SUCCESS:
		case userActionTypes.EP_SIGNIN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null,
			};
		case userActionTypes.GOOGLE_SIGNIN_FAILURE:
		case userActionTypes.EP_SIGNIN_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
