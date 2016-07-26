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
	this.RetrieveItems(tabs, function(items) {
		if(items && items.tabs) {
			callback(items.tabs);
		}
		else {
			callback(null);
		}
	});
};

ChromeHelper.StoreTabAt = function(index, tab, callback) {
	this.RetrieveTabs(function(savedTabs) {
		if (savedTabs) {
			savedTabs.splice(index, 0, tab);
			chrome.storage.sync.set({tabs : savedTabs});
			var isExcessTag = false;

			// If tab count exceeds maximum storage remove the LRU tag from storage
			if(savedTabs.length > MaxTabCount) {
				isExcessTag = true;
			}
			isExcessTag ? callback(MaxTabCount, savedTabs[MaxTabCount - 1]): callback(-1, null);
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
	this.RetrieveTabs(function(savedTabs) {
		if (savedTabs) {
			savedTabs.splice(index, 1 /* count of items to be deleted at index */);
			chrome.storage.sync.set({tabs : savedTabs});
		}
	});
};

ChromeHelper.RemoveDeadTabs = function(callback) {
	this.RetrieveTabs(function(savedTabs) {
		var deadTabs = [];
		if (savedTabs) {
			for(var i = 0; i < savedTabs.length; i++) {
				if((new Date).getTime() - savedTabs[i].time > TabValidityTime) {
					deadTabs.push(savedTabs[i]);
					ChromeHelper.RemoveTabAt(i);
				}
			}
		}
		callback(deadTabs);
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

ChromeHelper.StoreHelpTextVersion = function(version) {
	chrome.storage.sync.set({HelpTextVersion : version});
}

ChromeHelper.RetrieveHelpTextVersion = function(callback) {
	ChromeHelper.RetrieveItems(HelpTextVersion, function(items) {
		if(items && items.HelpTextVersion) {
			callback(items.HelpTextVersion);
		}
		else {
			callback(0);
		}
	});
}
