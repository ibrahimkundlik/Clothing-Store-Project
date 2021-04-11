import React from "react";
import { CustomButton } from "./CustomBtn.styles";

const CustomBtn = ({ children, ...props }) => {
	return <CustomButton {...props}>{children}</CustomButton>;
};

export default CustomBtn;
