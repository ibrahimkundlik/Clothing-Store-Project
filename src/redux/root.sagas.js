import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/shop.sagas";

export function* rootSaga() {
	yield all([call(fetchCollectionStart)]);
}
