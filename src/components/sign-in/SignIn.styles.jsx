import styled from "styled-components";

export const SignInContainer = styled.section`
	p {
		margin: 1rem 0;
	}
	form {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
	}
	.signin-error {
		color: red;
		font-weight: 400;
	}
`;
