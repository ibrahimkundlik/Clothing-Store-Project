//react
import React from "react";
import MenuItem from "./MenuItem.component";
import "./directory.styles.scss";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selector";

const SectionContainer = ({ sections }) => {
	return (
		<div className="section-container">
			{sections.map(({ id, ...otherProps }) => (
				<MenuItem key={id} {...otherProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySection,
});

export default connect(mapStateToProps)(SectionContainer);
