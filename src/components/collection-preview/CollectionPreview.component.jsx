import React from "react";
import Product from "../product/Product.component";
//react-router
import { Link } from "react-router-dom";
//styled-components
import {
	CollectionPreviewContainer,
	Header,
	ProductsList,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
	return (
		<CollectionPreviewContainer>
			<Header>
				<h2>{title.toUpperCase()}</h2>
				<Link to={`shop/${title.toLowerCase()}`}>Load More ...</Link>
			</Header>

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
