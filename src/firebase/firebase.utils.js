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

firebase.initializeApp(config);

export const createUserProfile = async (userAuth, additionalData) => {
	if (!userAuth) return;

	// document reference
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	// document snapshot
	const snapShot = await userRef.get();

	// collection reference
	// const collectionRef = firestore.collections("/users")
	// query snapshot
	// const querySnapshot = await collectionRef.get();

	// CRUD on userAuth, userRef
	if (!snapShot.exists) {
		const { displayName, email, photoURL } = userAuth;
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

export const addCollectionAndDocs = async (collectionName, collectionDocs) => {
	const collectionRef = firestore.collection(collectionName);

	const batch = firestore.batch();
	collectionDocs.forEach((obj) => {
		const documentRef = collectionRef.doc();
		batch.set(documentRef, obj);
	});

	return await batch.commit();
};

export const snapshotToMap = (collection) => {
	const updatedCollection = collection.docs.map((doc) => {
		const { title, items } = doc.data();
		return {
			id: doc.id,
			routeName: encodeURI(title.toLowerCase()),
			title,
			items,
		};
	});

	if (updatedCollection.length === 0) return null;

	return updatedCollection.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection;
		return acc;
	}, {});
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithRedirect(googleProvider);

export default firebase;
