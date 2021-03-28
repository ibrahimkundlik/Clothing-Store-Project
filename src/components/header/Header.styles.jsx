import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const LinkStyle = css`
	margin-left: 2rem;
	padding: 0.3rem 0;
	cursor: pointer;
	background: none;
	&:after {
		content: "";
		display: block;
		margin: auto;
		height: 2px;
		width: 0px;
		background: transparent;
		transition: all 0.5s ease;
	}
	&:hover:after {
		width: 100%;
		background: black;
	}
`;

export const HeaderContainer = styled.header`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0.1rem;
	position: relative;
`;

export const LogoContainer = styled.div`
	max-width: 55px;
`;

export const NavContainer = styled.nav`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
	align-items: center;
`;

export const NavLink = styled(Link)`
	${LinkStyle}
`;

export const NavDiv = styled.div`
	${LinkStyle}
`;
