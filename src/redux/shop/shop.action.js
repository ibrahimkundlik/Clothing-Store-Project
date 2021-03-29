import { shopActionType } from "./shop.types";

export const updateCollectionToMap = (collections) => ({
	type: shopActionType.UPDATE_COLLECTION,
	payload: collections,
});
