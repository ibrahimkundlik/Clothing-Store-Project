import React from "react";
import "./CustomBtn.styles.scss";

const CustomBtn = ({ text }) => {
	return (
		<button className="custom-btn" type="submit">
			{text}
		</button>
	);
};

export default CustomBtn;
