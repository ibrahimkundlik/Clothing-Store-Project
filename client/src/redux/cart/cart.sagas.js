import { all, call, takeLatest, put } from "redux-saga/effects";
import userActionTypes from "../user/user.types";
import { clearCart } from "./cart.action";

export function* clearCartOnLogout() {
	yield put(clearCart());
}

export function* onLogOutSuccess() {
	yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearCartOnLogout);
}

export function* cartSagas() {
	yield all([call(onLogOutSuccess)]);
}
