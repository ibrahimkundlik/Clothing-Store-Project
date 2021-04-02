import { takeLatest, call, put, all } from "redux-saga/effects";
import userActionTypes from "./user.types";
import { googleSignInFailure, googleSignInSuccess } from "./user.action";
//firebase
import {
	auth,
	googleProvider,
	createUserProfile,
} from "../../firebase/firebase.utils";

//generator for adding signInWithRedirect
export function* googleSignInAsync() {
	try {
		yield call([auth, auth.signInWithRedirect], googleProvider);
	} catch (error) {
		yield put(googleSignInFailure(error));
	}
}

//generator for watching redirect response of above function
export function* watchGetRedirectResult() {
	try {
		const { user } = yield call([auth, auth.getRedirectResult]);
		const userRef = yield call(createUserProfile, user);
		const userSnapshot = yield userRef.get();
		yield put(
			googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (error) {
		yield put(googleSignInFailure(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignInAsync);
}

export function* userSagas() {
	yield all([call(onGoogleSignInStart), call(watchGetRedirectResult)]);
}
