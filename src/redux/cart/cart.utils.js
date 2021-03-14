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

export const deleteItem = (currentItems, itemRemove) => {
	for (let i = 0; i < currentItems.length; i++) {
		if (itemRemove.id === currentItems[i].id) {
			return currentItems
				.slice(0, i)
				.concat(currentItems.slice(i + 1, currentItems.length));
		}
	}
};
