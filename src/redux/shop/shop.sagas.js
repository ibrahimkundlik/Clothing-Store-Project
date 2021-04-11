import { all, call, put, takeLatest } from "redux-saga/effects";
import { shopActionType } from "./shop.types";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.action";
//firestore
import { firestore, snapshotToMap } from "../../firebase/firebase.utils";

export function* fetchCollectionAsync() {
	try {
		const collectionRef = firestore.collection("collections");
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(snapshotToMap, snapshot);
		if (collectionsMap) {
			yield put(fetchCollectionSuccess(collectionsMap));
		} else {
			throw new Error(
				"The operation could not be completed. This typically indicates that your device does not have a healthy Internet connection at the moment."
			);
		}
	} catch (error) {
		yield put(fetchCollectionFailure(error.message));
	}
}

export function* fetchCollectionStart() {
	yield takeLatest(shopActionType.FETCH_COLLECTION_START, fetchCollectionAsync);
}

export function* shopSagas() {
	yield all([call(fetchCollectionStart)]);
}
