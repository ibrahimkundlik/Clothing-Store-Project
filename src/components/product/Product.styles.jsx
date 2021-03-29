import styled from "styled-components";
import media from "../../css/media.styles";

export const ProductContainer = styled.section`
	width: 45%;
	display: flex;
	flex-flow: row wrap;
	padding: 1rem 0;
	position: relative;

	button {
		width: 80%;
		font-size: 0.8rem;
		position: absolute;
		top: 58%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		display: none;

		&:hover {
			background-color: #ceffdf;
			color: black;
		}
	}

	&:hover,
	&:focus {
		div:nth-child(1) {
			opacity: 0.7;
		}

		button {
			display: block;
		}
	}

	${media.tablet`
    width: 23%;
  `}

	@media screen and (min-width: 1200px) {
		button {
			top: 70%;
		}
	}
`;

export const ProductImage = styled.div`
	width: 100%;
	height: 200px;
	background: ${(props) => `url(${props.imageUrl})`};
	background-position: 50% 50%;
	background-repeat: no-repeat;
	background-size: cover;
	transition: all 0.4s;

	@media screen and (min-width: 520px) {
		height: 250px;
	}

	@media screen and (min-width: 1200px) {
		height: 350px;
	}
`;

export const ProductInfo = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	padding-top: 0.7rem;

	${media.tablet`
    flex-flow: row wrap;
		justify-content: center;
  `}

	${media.desktop`
    flex-flow: row nowrap;
		justify-content: space-between;
  `}
`;

export const ProductName = styled.p`
	${media.tablet`
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
  `}

	${media.desktop`
    width: unset;
		text-align: left;
		margin-bottom: 0;
  `}
`;

export const ProductPrice = styled.p`
	min-width: 40px;

	${media.desktop`
    min-width: 55px;
  `}
`;
