$(document).ready(function() {
    var tabManager = new TabManager();
    tabManager.GetAllSavedTabs(function(tabs) {
        var len = tabs.length;
        for(var i = 0; i < tabs.length; i++) {
            $('.saved_tabs').append("<p>" + TabHelper.GetTabTitle(tabs[i]) + "</p>");        
        }
    });
});