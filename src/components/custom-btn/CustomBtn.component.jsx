import React from "react";
import "./CustomBtn.styles.scss";

const CustomBtn = ({ type, children, onClick, googleAuth }) => {
	return (
		<button
			className={`${googleAuth ? "googleAuth " : ""}custom-btn`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default CustomBtn;
