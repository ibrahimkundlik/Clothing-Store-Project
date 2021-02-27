import React from "react";
import SHOP_DATA from "./SHOP_DATA";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.component";
import "./ShopPage.styles.scss";

class ShopPage extends React.Component {
	constructor() {
		super();
		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		return (
			<div className="shoppage container">
				{this.state.collections.map(({ id, title, items }) => (
					<CollectionPreview key={id} title={title} items={items} />
				))}
			</div>
		);
	}
}

export default ShopPage;
