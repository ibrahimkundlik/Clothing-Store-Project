export const storeItem = (currentItems, itemToAdd) => {
	if (itemToAdd.quantity) {
		return currentItems.map((item) =>
			itemToAdd.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
		);
	} else {
		itemToAdd.quantity = 1;
		return [...currentItems, itemToAdd];
	}
};

export const removeItem = (currentItems, itemToRemove) => {
	return currentItems.map((item) =>
		itemToRemove.id === item.id && item.quantity > 1
			? { ...item, quantity: item.quantity - 1 }
			: item
	);
};

export const deleteItemFromCart = (currentItems, itemToDelete) => {
	for (let i = 0; i < currentItems.length; i++) {
		if (itemToDelete.id === currentItems[i].id) {
			return currentItems
				.slice(0, i)
				.concat(currentItems.slice(i + 1, currentItems.length));
		}
	}
};
