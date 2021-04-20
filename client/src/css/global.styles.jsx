import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
html {
	font-family: "Josefin Sans", sans-serif;
	font-size: 16px;
}
body {
	padding: 0rem 1.5rem 3rem 1.5rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: 400;
}
p {
	font-weight: 300;
}
img {
	width: 100%;
	display: block;
}
a {
	text-decoration: none;
	color: black;
	display: block;
}
input,
button {
	font-family: "Josefin Sans", sans-serif;
	font-size: 16px;
	outline: none;
	border: none;
}
.app-container {
	max-width: 1600px;
	margin: 0 auto;
}

@media screen and (min-width: 768px) {
	html,
	input,
	button {
		font-size: 19px;
	}
	body {
		padding: 0rem 2rem 3rem 2rem;
	}
}

@media screen and (min-width: 992px) {
	html,
	input,
	button {
		font-size: 22px;
	}
	body {
		padding: 0rem 2.5rem 3rem 2.5rem;
	}
}
`;
