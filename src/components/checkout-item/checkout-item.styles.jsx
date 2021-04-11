import styled from "styled-components";
import media from "../../css/media.styles";

export const CheckoutItemContainer = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: flex-start;
	padding: 1rem 0;
	border-bottom: 2px solid #c5c5ff;
	position: relative;
	text-align: center;

	p:nth-child(2) {
		flex-basis: 30%;
		padding-left: 5%;
	}

	p:nth-child(3) {
		flex-basis: 23%;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: translateY(-20%);
		button {
			background: none;
			color: black;
			padding: 0 0.5rem;
			margin: 0;
			font-size: 2rem;
			&:hover {
				outline: none;
			}
		}
	}

	p:nth-child(4) {
		flex-basis: 18%;
		text-align: center;
	}

	p:nth-child(5) {
		flex-basis: 0%;
		text-align: center;
		position: absolute;
		bottom: 10%;
		right: 0%;
		button {
			background: none;
			padding: 0.2rem;
			margin: 0;
			font-size: 1.3rem;
		}
	}

	&:last-child {
		border: none;
	}

	${media.tablet`
  flex-flow: row nowrap;
  align-items: center;
  text-align: left;

  p:nth-child(3) {
    transform: translateY(0);
  }

  p:nth-child(5) {
    flex-basis: 18%;
    position: initial;

    span {
      display: none;
    }
  }
  `}
`;

export const ItemImg = styled.div`
	flex-basis: 20%;
`;
