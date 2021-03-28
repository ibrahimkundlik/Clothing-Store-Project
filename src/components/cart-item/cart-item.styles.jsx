import styled from "styled-components";

export const CartItemContainer = styled.section`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	margin: 1rem 0;
`;

export const ItemImg = styled.div`
	width: 25%;
`;

export const ItemInfo = styled.div`
	width: 75%;
	margin-left: 1rem;
`;

export const ItemName = styled.p`
	margin-bottom: 0.5rem;
	font-weight: 400;
`;

export const ItemQuantity = styled.p`
	font-weight: 400;
`;
