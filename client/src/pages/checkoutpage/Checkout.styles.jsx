import styled from "styled-components";
import media from "../../css/media.styles";

export const CheckoutPageContainer = styled.section`
	width: 100%;
	max-width: 1000px;
	margin: 1rem auto 2rem auto;
`;

export const HeaderContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	padding: 1rem 0;
	text-align: center;

	${media.tablet`
  text-align: left;
  `};

	p:nth-child(1) {
		flex-basis: 20%;
	}
	p:nth-child(2) {
		flex-basis: 30%;
		padding-left: 5%;
	}
	p:nth-child(3) {
		flex-basis: 23%;
		text-align: center;
	}
	p:nth-child(4) {
		flex-basis: 18%;
		text-align: center;
	}
	p:nth-child(5) {
		display: none;
		flex-basis: 0%;
		text-align: center;

		${media.tablet`
		flex-basis: 18%;
		display: block;
    `};
	}
`;

export const ItemsContainer = styled.div`
	padding: 0.5rem 0;
	border-top: 2px solid #cacaca;
	border-bottom: 2px solid #cacaca;
`;

export const TotalContainer = styled.div`
	width: 100%;
	text-align: right;
	text-transform: uppercase;
	margin-top: 1.5rem;

	h1 {
		font-weight: 300;
	}
`;

export const StripeMssgContainer = styled.div`
	width: 100%;
	padding: 1rem 0;
	text-align: right;
	color: #e12828;

	p {
		font-weight: 400;
		padding: 0.4rem 0;
	}

	span {
		color: green;
	}

	button {
		margin-top: 1rem;
		width: 50%;
	}
`;
