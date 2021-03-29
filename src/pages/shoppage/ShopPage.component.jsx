//react
import React, { useEffect, useState } from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collectionpage/CollectionPage.component";
import Spinner from "../../components/spinner/spinner.component";
//react-router
import { Route } from "react-router-dom";
//firestore
import { firestore, snapshotToMap } from "../../firebase/firebase.utils";
//redux
import { connect } from "react-redux";
import { updateCollectionToMap } from "../../redux/shop/shop.action";
//HOC
const CollectionOverviewLoading = Spinner(CollectionOverview);
const CollectionPageLoading = Spinner(CollectionPage);

const ShopPage = ({ match, updateCollectionToMap }) => {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = firestore
			.collection("collections")
			.onSnapshot(async (snapshot) => {
				updateCollectionToMap(snapshotToMap(snapshot));
				setLoading(false);
			});

		return () => {
			unsubscribe();
		};
	});

	return (
		<section>
			<Route
				exact
				path={`${match.path}`}
				render={(props) => (
					<CollectionOverviewLoading isLoading={isLoading} {...props} />
				)}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				render={(props) => (
					<CollectionPageLoading isLoading={isLoading} {...props} />
				)}
			/>
		</section>
	);
};

const mapDispatchToProps = (dispatch) => ({
	updateCollectionToMap: (collections) =>
		dispatch(updateCollectionToMap(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
