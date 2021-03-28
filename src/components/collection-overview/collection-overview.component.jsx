//react
import React from "react";
import CollectionPreview from "../collection-preview/CollectionPreview.component";
//styled-components
import { CollectionOverviewContainer } from "./collection-overview.styles";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsArray } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collections }) => {
	return (
		<CollectionOverviewContainer>
			{collections.map(({ id, title, items }) => (
				<CollectionPreview key={id} title={title} items={items} />
			))}
		</CollectionOverviewContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollectionsArray,
});

export default connect(mapStateToProps)(CollectionOverview);
