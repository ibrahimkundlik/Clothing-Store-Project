import { takeLatest, call, put, all } from "redux-saga/effects";
import userActionTypes from "./user.types";
import {
	SignInSuccess,
	SignInFailure,
	SignOutSuccess,
	SignOutFailure,
} from "./user.action";
//firebase
import {
	auth,
	googleProvider,
	createUserProfile,
	getCurrentUser,
} from "../../firebase/firebase.utils";

//generator for signInWithRedirect - google auth
export function* googleSignInAsync() {
	try {
		yield call([auth, auth.signInWithRedirect], googleProvider);
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

//common code for getting snapshot
export function* getSnapshotFromAuth(user) {
	try {
		const userRef = yield call(createUserProfile, user);
		const userSnapshot = yield userRef.get();
		yield put(SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(SignInFailure(error));
	}
}

//generator for checking user session - persistance
export function* checkUserSessionAsync() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromAuth(userAuth);
	} catch (error) {
		yield put(SignInFailure(error));
	}
}

//generator for signing out user
export function* signOutAsync() {
	try {
		yield auth.signOut();
		yield put(SignOutSuccess());
	} catch (error) {
		yield put(SignOutFailure(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignInAsync);
}

export function* onEmailSignInStart() {
	yield takeLatest(userActionTypes.EP_SIGNIN_START, emailSignInAsync);
}

export function* onCheckUserSession() {
	yield takeLatest(userActionTypes.CHECK_USER_SESSION, checkUserSessionAsync);
}

export function* onUserSignOut() {
	yield takeLatest(userActionTypes.SIGNOUT_START, signOutAsync);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onUserSignOut),
	]);
}
