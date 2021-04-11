import styled, { css } from "styled-components";

const googleAuthStyles = css`
	color: black;
	background-color: #4285f4;
	&:hover {
		background-color: #6a9ff5;
		outline: 1px solid black;
	}
`;

const defaultStyles = css`
	color: #d3feff;
	background-color: black;
	&:hover {
		background-color: #d3feff;
		color: black;
		outline: 1px solid black;
	}
`;

const applyStyles = (props) => {
	return props.googleAuth ? googleAuthStyles : defaultStyles;
};

export const CustomButton = styled.button`
	padding: 0.7rem 0.5rem 0.5rem 0.5rem;
	transition: all 0.5s;
	font-weight: 400;
	margin: 1rem 0;
	text-transform: uppercase;
	cursor: pointer;
	${applyStyles};
`;
