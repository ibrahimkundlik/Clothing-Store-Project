export const storeItems = (currentItems, itemToAdd) => {
	for (let i = 0; i < currentItems.length; i++) {
		if (itemToAdd.id === currentItems[i].id) {
			currentItems[i].quantity += 1;
			return [...currentItems];
		}
	}
	itemToAdd.quantity = 1;
	return [...currentItems, itemToAdd];
};
