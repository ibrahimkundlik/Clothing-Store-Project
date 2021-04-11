import { takeLatest, call, put, all } from "redux-saga/effects";
import userActionTypes from "./user.types";
import {
	SignInSuccess,
	SignInFailure,
	SignOutSuccess,
	SignOutFailure,
	SignUpSuccess,
	SignUpFailure,
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
export function* getSnapshotFromAuth(user, additionalData) {
	try {
		const userRef = yield call(createUserProfile, user, additionalData);
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

//generator for signing up new user
//1. creating new user
export function* userSignUpAsync({
	payload: { displayName, email, password, photoURL },
}) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield put(
			SignUpSuccess({ user, additionalData: { displayName, photoURL } })
		);
	} catch (error) {
		yield put(SignUpFailure(error));
	}
}
//2. signing in new user
export function* userSignUpSuccessAsync({ payload: { user, additionalData } }) {
	yield getSnapshotFromAuth(user, additionalData);
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
export function* onUserSignUp() {
	yield takeLatest(userActionTypes.SIGNUP_START, userSignUpAsync);
}
export function* onUserSignUpSuccess() {
	yield takeLatest(userActionTypes.SIGNUP_SUCCESS, userSignUpSuccessAsync);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onUserSignOut),
		call(onUserSignUp),
		call(onUserSignUpSuccess),
	]);
}
