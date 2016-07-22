function TabManager() {
    var tabs = [];
};


TabManager.prototype.Init = function() {
    this.tabs = [];
};

TabManager.prototype.GetAllSavedTabs = function(callback) {
    ChromeHelper.RetrieveTabs (function(items) {
        callback(items.tabs);
        return;
    });
};

TabManager.prototype.SaveTab = function(tab) {
    ChromeHelper.StoreTabAt(0, tab);
};

