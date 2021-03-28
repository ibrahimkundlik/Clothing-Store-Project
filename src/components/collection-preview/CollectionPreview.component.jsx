import React from "react";
import Product from "../product/Product.component";
//styled-components
import {
	CollectionPreviewContainer,
	ProductsList,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
	return (
		<CollectionPreviewContainer>
			<h2>{title.toUpperCase()}</h2>
			<ProductsList>
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<Product key={item.id} item={item} />
					))}
			</ProductsList>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;
