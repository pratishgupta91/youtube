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

ChromeHelper.StoreTabAt = function(index, tab, callback) {
	this.RetrieveTabs(function(items) {
		if (items && items.tabs) {
			items.tabs.splice(index, 0, tab);
			chrome.storage.sync.set({tabs : items.tabs});
			var isExcessTag = false;

			// If tab count exceeds maximum storage remove the LRU tag from storage
			if(items.tabs.length > MaxTabCount) {
				isExcessTag = true;
			}
			isExcessTag ? callback(MaxTabCount, items.tabs[MaxTabCount - 1]): callback(-1, null);
		}
		else {	
			firstTab = [];
			firstTab.push(tab);
			chrome.storage.sync.set({tabs : firstTab});
			callback(-1, null);
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

ChromeHelper.StoreBookmarkFolderId = function(id) {
	chrome.storage.sync.set({BookmarkId : id});
};

ChromeHelper.RetrieveBookmarkFolderId = function(callback) {
	ChromeHelper.RetrieveItems(BookmarkId, function(items) {
		callback(items);
	});
};

ChromeHelper.StoreLandingPageStatus = function(isVisited) {
	chrome.storage.sync.set({LandingPageStatus : isVisited});
}

ChromeHelper.RetrieveLandingPageStatus = function(callback) {
	ChromeHelper.RetrieveItems(LandingPageStatus, function(items) {
		callback(items);
	});
}
