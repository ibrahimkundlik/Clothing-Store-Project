//react
import React from "react";
import Product from "../../components/product/Product.component";
//redux
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
//styled-components
import { CollectionPageContainer } from "./CollectionPage.styles";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<h2>{title.toUpperCase()}</h2>
			<div className="products">
				{items.map((item) => (
					<Product key={item.id} item={item} />
				))}
			</div>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
