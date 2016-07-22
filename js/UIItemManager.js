function ItemManager() {
};


ItemManager.GetItem = function(parentElem, index) {
	return parentElem.eq(index);
};

ItemManager.GetItemWidth = function(index) {
	var elem = parentElem.eq(index);
	return elem.outerWidth();
};

ItemManager.GetItemHeight = function(index) {
	var elem = parentElem.eq(index);
	return elem.outerHeight();
};