var tabs = 'tabs';

function ChromeHelper() {

}

ChromeHelper.RetrieveItems = function(data, callback) {
	chrome.storage.sync.get(data, function(items) {
		if (chrome.runtime.error) {
			callback(null);
		}
		else {
			callback(items);
		}
	});
};

ChromeHelper.RetrieveTabs = function(callback) {
	this.RetrieveItems(tabs, callback);
};

ChromeHelper.StoreTabAt = function(index, tab) {
	this.RetrieveTabs(function(items) {
		if (items && items.tabs) {
			items.tabs.splice(index, 0, tab);
			chrome.storage.sync.set({tabs : items.tabs});
		}
		else {	
			firstTab = [];
			firstTab.push(tab);
			chrome.storage.sync.set({tabs : firstTab});
		}
	});
};

ChromeHelper.RemoveTabAt = function(index) {
	this.RetrieveTabs(function(items) {
		if (items) {
			items.tabs.splice(index, 1 /* count of items to be deleted at index */);
			chrome.storage.sync.set({tabs : items.tabs});
		}
	});
};