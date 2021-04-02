import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export function* rootSaga() {
	yield all([call(fetchCollectionStart), call(userSagas)]);
}
