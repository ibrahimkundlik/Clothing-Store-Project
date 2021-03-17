//react
import React from "react";
import "./CollectionPage.styles.scss";
import Product from "../../components/product/Product.component";
//redux
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h2>{title.toUpperCase()}</h2>
			<div className="products">
				{items.map((item) => (
					<Product key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
