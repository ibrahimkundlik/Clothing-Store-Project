import React from "react";
import { withRouter } from "react-router-dom";
//styled-components
import {
	MenuContainer,
	SectionImage,
	MenuText,
} from "./SectionContainer.styles";

const MenuItem = ({ title, imageUrl, linkUrl, match, history }) => {
	return (
		<MenuContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<SectionImage imageUrl={imageUrl} />
			<MenuText>
				<h1>{title.toUpperCase()}</h1>
				<p>SHOP NOW</p>
			</MenuText>
		</MenuContainer>
	);
};

export default withRouter(MenuItem);
