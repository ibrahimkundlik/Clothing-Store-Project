//react
import React from "react";
import MenuItem from "./MenuItem.component";
//styled-components
import { SectionContainerComp } from "./SectionContainer.styles";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selector";

const SectionContainer = ({ sections }) => {
	return (
		<SectionContainerComp>
			{sections.map(({ id, ...otherProps }) => (
				<MenuItem key={id} {...otherProps} />
			))}
		</SectionContainerComp>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySection,
});

export default connect(mapStateToProps)(SectionContainer);
