import { takeLatest, call, put, all } from "redux-saga/effects";
import userActionTypes from "./user.types";
import { SignInSuccess, SignInFailure } from "./user.action";
//firebase
import {
	auth,
	googleProvider,
	createUserProfile,
} from "../../firebase/firebase.utils";

//generator for adding signInWithRedirect - google auth
export function* googleSignInAsync() {
	try {
		yield call([auth, auth.signInWithRedirect], googleProvider);
	} catch (error) {
		yield put(SignInFailure(error));
	}
}

//generator for watching redirect response of above function - google auth
export function* watchGetRedirectResult() {
	try {
		const { user } = yield call([auth, auth.getRedirectResult]);
		if (!user) return;
		yield getSnapshotFromAuth(user);
	} catch (error) {
		yield put(SignInFailure(error));
	}
}

//generator for email & password sign-in
export function* emailSignInAsync({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromAuth(user);
	} catch (error) {
		yield put(SignInFailure(error));
	}
}

//common code for converting
export function* getSnapshotFromAuth(user) {
	try {
		const userRef = yield call(createUserProfile, user);
		const userSnapshot = yield userRef.get();
		yield put(SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(SignInFailure(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignInAsync);
}

export function* onEmailSignInStart() {
	yield takeLatest(userActionTypes.EP_SIGNIN_START, emailSignInAsync);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(watchGetRedirectResult),
		call(onEmailSignInStart),
	]);
}
