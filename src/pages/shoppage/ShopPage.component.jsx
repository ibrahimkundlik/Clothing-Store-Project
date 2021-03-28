//react
import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collectionpage/CollectionPage.component";
//react-router
import { Route } from "react-router-dom";

const ShopPage = ({ match }) => {
	return (
		<section>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</section>
	);
};

export default ShopPage;
