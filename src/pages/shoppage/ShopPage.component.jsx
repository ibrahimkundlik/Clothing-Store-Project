//react
import React from "react";
import "./ShopPage.styles.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
//react-router
import { Route } from "react-router-dom";

const ShopPage = () => {
	return (
		<div className="shoppage container">
			<CollectionOverview />
		</div>
	);
};

export default ShopPage;
