function TabManager() {
    var tabs = [];
};


TabManager.prototype.Init = function() {
    this.tabs = [];
};

TabManager.prototype.GetAllSavedTabs = function() {
    return this.tabs;
};

TabManager.prototype.SaveTab = function(tab) {
    this.tabs.push(tab);
};


