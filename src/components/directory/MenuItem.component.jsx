import React from "react";

const MenuItem = ({ title, imageUrl }) => {
	return (
		<div className="menu-container">
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

export default MenuItem;
