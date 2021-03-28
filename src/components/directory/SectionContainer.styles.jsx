import styled from "styled-components";
import media from "../../css/media.styles";

export const SectionContainerComp = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
`;

export const MenuContainer = styled.div`
	width: 95%;
	max-width: 450px;
	height: 240px;
	margin: 1rem auto;
	overflow: hidden;
	outline: 2.5px solid #242222;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	position: relative;

	&:hover,
	&:focus {
		cursor: pointer;
		div:nth-child(1) {
			transform: scale(1.2);
		}
		div:nth-child(2) {
			background-color: #f1f1f1;
		}
	}

	${media.tablet`
    width: 45%;
		max-width: 100%;
    &:nth-child(5) {
      width: 95%;
      height: 300px;
    }
  `};

	${media.desktop`
    width: 30%;
		&:nth-child(4),
		&:nth-child(5) {
			width: 47%;
			height: 320px;
		}
  `};
`;

export const SectionImage = styled.div`
	height: 100%;
	width: 100%;
	background: ${(props) => `url(${props.imageUrl})`};
	background-repeat: no-repeat;
	background-size: cover;
	transition: all 2s;
`;

export const MenuText = styled.div`
	position: absolute;
	padding: 1.2rem;
	border: 2px solid black;
	background-color: #f1f1f183;
	text-align: center;
	transition: all 1s;

	h1 {
		margin-bottom: 0.3rem;
	}
`;
