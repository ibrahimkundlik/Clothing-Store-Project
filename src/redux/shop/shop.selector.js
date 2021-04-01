import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectShopCollectionsArray = createSelector([selectShop], (shop) =>
	shop.collections ? Object.values(shop.collections) : []
);

export const selectCollection = (param) => {
	return createSelector([selectShopCollections], (collections) =>
		collections ? collections[param] : null
	);
};

export const selectIsFetching = createSelector(
	[selectShop],
	(shop) => shop.isFetching
);

export const selectErrorMessage = createSelector(
	[selectShop],
	(shop) => shop.errorMessage
);
