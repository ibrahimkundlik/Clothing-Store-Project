//react
import React from "react";
import CustomBtn from "../custom-btn/CustomBtn.component";
//styled-components
import {
	ProductContainer,
	ProductImage,
	ProductInfo,
	ProductName,
	ProductPrice,
} from "./Product.styles";
//redux
import { connect } from "react-redux";
import { addItemsToCart } from "../../redux/cart/cart.action";

const Product = ({ item, addItemsToCart }) => {
	const { imageUrl, name, price } = item;
	return (
		<ProductContainer>
			<ProductImage imageUrl={imageUrl} />
			<ProductInfo>
				<ProductName>{name}</ProductName>
				<ProductPrice>$ {price}</ProductPrice>
			</ProductInfo>
			<CustomBtn onClick={() => addItemsToCart(item)}>add to cart</CustomBtn>
		</ProductContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItemsToCart: (item) => dispatch(addItemsToCart(item)),
});

export default connect(null, mapDispatchToProps)(Product);
