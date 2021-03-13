//react
import React from "react";
import CustomBtn from "../custom-btn/CustomBtn.component";
import "./Product.styles.scss";
//redux
import { connect } from "react-redux";
import { addItemsToCart } from "../../redux/cart/cart.action";

const Product = ({ item, addItemsToCart }) => {
	const { imageUrl, name, price } = item;
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
			<CustomBtn onClick={() => addItemsToCart(item)}>add to cart</CustomBtn>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItemsToCart: (item) => dispatch(addItemsToCart(item)),
});

export default connect(null, mapDispatchToProps)(Product);
