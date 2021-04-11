import styled from "styled-components";
import media from "../../css/media.styles";

export const LoginPageContainer = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: flex-start;
	width: 90%;
	max-width: 500px;
	margin: 0 auto;

	& > * {
		margin: 2rem 0;
		width: 100%;
	}

	${media.tablet`max-width: 600px;`}

	${media.desktop`
  width: 100%;
  max-width: 1280px;
  & > * {
    width: 46%;
  }
  `}
`;
