import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, linkUrl, match, history }) => {
	return (
		<div
			className="menu-container"
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<div
				className="bg-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className="menu-text">
				<h1>{title.toUpperCase()}</h1>
				<p>SHOP NOW</p>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
