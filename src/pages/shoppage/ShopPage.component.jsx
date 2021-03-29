//react
import React, { useEffect } from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collectionpage/CollectionPage.component";
//react-router
import { Route } from "react-router-dom";
//firestore
import { firestore, snapshotToMap } from "../../firebase/firebase.utils";
//redux
import { connect } from "react-redux";
import { updateCollectionToMap } from "../../redux/shop/shop.action";

const ShopPage = ({ match, updateCollectionToMap }) => {
	useEffect(() => {
		const unsubscribe = firestore
			.collection("collections")
			.onSnapshot(async (snapshot) => {
				updateCollectionToMap(snapshotToMap(snapshot));
			});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<section>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</section>
	);
};

const mapDispatchToProps = (dispatch) => ({
	updateCollectionToMap: (collections) =>
		dispatch(updateCollectionToMap(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
