//react
import React, { useEffect } from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collectionpage/CollectionPage.component";
import Spinner from "../../components/with-spinner/spinner.component";
//react-router
import { Route } from "react-router-dom";
//redux
import { connect } from "react-redux";
import {
	selectIsFetching,
	selectErrorMessage,
} from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import { fetchCollectionStart } from "../../redux/shop/shop.action";
//HOC
const CollectionOverviewLoading = Spinner(CollectionOverview);
const CollectionPageLoading = Spinner(CollectionPage);

const ShopPage = ({ match, isLoading, errorMessage, fetchCollectionStart }) => {
	useEffect(() => {
		fetchCollectionStart();
	}, [fetchCollectionStart]);

	return (
		<section>
			<Route
				exact
				path={`${match.path}`}
				render={(props) => (
					<CollectionOverviewLoading
						isLoading={isLoading}
						errorMessage={errorMessage}
						{...props}
					/>
				)}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				render={(props) => (
					<CollectionPageLoading
						isLoading={isLoading}
						errorMessage={errorMessage}
						{...props}
					/>
				)}
			/>
		</section>
	);
};

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsFetching,
	errorMessage: selectErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
