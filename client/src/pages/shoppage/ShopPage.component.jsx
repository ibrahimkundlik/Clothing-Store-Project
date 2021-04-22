//react
import React, { lazy, Suspense, useEffect } from "react";
import Spinner from "../../components/spinner/spinner.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
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
//HOC + lazy-loading
const CollectionOverviewLoading = WithSpinner(
	lazy(() =>
		import("../../components/collection-overview/collection-overview.component")
	)
);
const CollectionPageLoading = WithSpinner(
	lazy(() => import("../collectionpage/CollectionPage.component"))
);

const ShopPage = ({ match, isLoading, errorMessage, fetchCollectionStart }) => {
	useEffect(() => {
		fetchCollectionStart();
	}, [fetchCollectionStart]);

	return (
		<section>
			<Suspense fallback={<Spinner />}>
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
			</Suspense>
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
