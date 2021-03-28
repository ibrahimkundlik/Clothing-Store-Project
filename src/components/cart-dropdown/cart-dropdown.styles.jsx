import styled from "styled-components";

export const CartDropdownContainer = styled.section`
	position: absolute;
	top: 80%;
	right: 0;
	z-index: 1;
	background-color: #f5f8ff;
	border: 2px solid black;
	width: 100%;
	max-width: 350px;
	padding: 0 0.8rem;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;

	.empty-cart {
		margin-top: 1rem;
		width: 100%;
		text-align: center;
	}
`;

export const CartItems = styled.div`
	max-height: 300px;
	overflow-y: scroll;
`;
