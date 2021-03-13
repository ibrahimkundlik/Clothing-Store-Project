import React from "react";
import Product from "../product/Product.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h2>{title.toUpperCase()}</h2>
			<div className="products">
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<Product key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
