import { css } from "styled-components";

const sizes = {
	desktop: 992,
	tablet: 768,
};

export default Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media screen and (min-width: ${sizes[label]}px) {
			${css(...args)};
		}
	`;
	return acc;
}, {});
