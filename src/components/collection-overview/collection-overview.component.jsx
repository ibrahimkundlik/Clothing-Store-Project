//react
import React from "react";
import CollectionPreview from "../collection-preview/CollectionPreview.component";
import "./collection-overview.styles.scss";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsArray } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collections }) => {
	return (
		<div className="collection-overview">
			{collections.map(({ id, title, items }) => (
				<CollectionPreview key={id} title={title} items={items} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollectionsArray,
});

export default connect(mapStateToProps)(CollectionOverview);
