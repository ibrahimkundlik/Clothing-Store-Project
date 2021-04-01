import styled from "styled-components";

export const CollectionPreviewContainer = styled.section`
	width: 100%;
`;

export const Header = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
	margin: 3rem 0 1rem 0;

	a {
		font-size: 1.1rem;
	}

	a:after {
		content: "";
		display: block;
		margin: auto;
		height: 3px;
		width: 0px;
		background: transparent;
		transition: all 0.5s ease;
	}

	a:hover:after {
		width: 100%;
		background: black;
	}
`;

export const ProductsList = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`;
