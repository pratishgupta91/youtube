function TabManager() {
    var tabs = [];
};


TabManager.prototype.Init = function() {
    this.tabs = [];
};

TabManager.prototype.GetAllSavedTabs = function(callback) {
    ChromeHelper.RetrieveTabs (function(savedTabs) {
        callback(savedTabs);
        return;
    });
};

TabManager.prototype.SaveTab = function(tab, callback) {
    ChromeHelper.StoreTabAt(0 /* index */, tab, callback);
};

TabManager.prototype.RemoveDeadTabs = function(callback) {
	ChromeHelper.RemoveDeadTabs(callback);
};

TabManager.prototype.RemoveTabAt = function(index) {
    ChromeHelper.RemoveTabAt(index);
};



