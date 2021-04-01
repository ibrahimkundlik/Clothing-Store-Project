import { shopActionType } from "./shop.types";

const INITIAL_STATE = {
	collections: null,
	isFetching: true,
	errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case shopActionType.FETCH_COLLECTION_START:
			return {
				...state,
				isFetching: true,
			};
		case shopActionType.FETCH_COLLECTION_SUCCESS:
			return {
				...state,
				isFetching: false,
				collections: action.payload,
			};
		case shopActionType.FETCH_COLLECTION_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
