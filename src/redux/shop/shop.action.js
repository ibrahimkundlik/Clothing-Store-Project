import { shopActionType } from "./shop.types";
//firestore
import { firestore, snapshotToMap } from "../../firebase/firebase.utils";

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

export const fetchCollectionAsync = () => {
	return (dispatch) => {
		dispatch(fetchCollectionStart());
		firestore
			.collection("collections")
			.get()
			.then((snapshot) => {
				const collectionsMap = snapshotToMap(snapshot);
				if (collectionsMap) {
					dispatch(fetchCollectionSuccess(collectionsMap));
				} else {
					throw new Error(
						"The operation could not be completed. This typically indicates that your device does not have a healthy Internet connection at the moment."
					);
				}
			})
			.catch((error) => {
				dispatch(fetchCollectionFailure(error.message));
			});
	};
};
