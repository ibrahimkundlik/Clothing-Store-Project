import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyC8gr2AgzHoK9SlLT1vxSVy-wli3Xpfn2Q",
	authDomain: "crowndb-409c1.firebaseapp.com",
	projectId: "crowndb-409c1",
	storageBucket: "crowndb-409c1.appspot.com",
	messagingSenderId: "296162277453",
	appId: "1:296162277453:web:13a7a622d00e4269840404",
	measurementId: "G-VZG50TEWPC",
};

export const createUserProfile = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	// query on snapShot
	const snapShot = await userRef.get();

	// CRUD on userAuth, userRef
	if (!snapShot.exist) {
		const { displayName, email, photoURL } = userAuth;
		// console.log(1, displayName);
		// console.log(2, email);
		// console.log(3, photoURL);
		console.log(snapShot);
		const createdAt = new Date();
		try {
			await userRef.set({
				createdAt,
				displayName,
				email,
				photoURL,
				...additionalData,
			});
		} catch (err) {
			console.log("Error creating user : createUserProfile");
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
