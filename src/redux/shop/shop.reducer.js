import SHOP_DATA from "../../pages/shoppage/SHOP_DATA";

const INITIAL_STATE = {
	collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default shopReducer;
