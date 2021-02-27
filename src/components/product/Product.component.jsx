import React from "react";
import "./Product.styles.scss";

const Product = ({ name, imageUrl, price }) => {
	return (
		<div className="product-cont">
			<div
				className="product-img"
				style={{
					backgroundImage: `url("${imageUrl}")`,
				}}
			></div>
			<div className="product-info">
				<p className="product-name">{name}</p>
				<p className="product-price">$ {price}</p>
			</div>
		</div>
	);
};

export default Product;
