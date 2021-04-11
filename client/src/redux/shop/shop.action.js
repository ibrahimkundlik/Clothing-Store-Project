import { shopActionType } from "./shop.types";

export const fetchCollectionStart = () => ({
	type: shopActionType.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
	type: shopActionType.FETCH_COLLECTION_SUCCESS,
	payload: collectionsMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
	type: shopActionType.FETCH_COLLECTION_FAILURE,
	payload: errorMessage,
});
