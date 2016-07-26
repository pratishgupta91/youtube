function TabViewManager () {

}

TabViewManager.GetTabViewScript = function() {
	var script = "";

	// ToolBar
	// script += "<div class='toolbar'>";
	// script += "<div class='show-chart'>";
 //    script += "<img src=../img/chart.png height='20px' width='20px'>";
 //    script += "</div></div>";

    // Chart
    script += "<div style='width:300px; height:0px;' class='hart-layout'>";
    script += "<canvas id='usage_chart' class='usage_chart' width='200' height='80' ></canvas>";
    script += "</div>";
            
    // Tab view            
    script += "<div class='popup-canvas'>";
    script += "<div class='container'>";
    script += "<ul class='item-layout'></ul>";
    script += "</div></div>";

    return script;
};

TabViewManager.ShowTabView = function() {
	GetElement(TabView).append(TabViewManager.GetTabViewScript());
}

TabViewManager.HideTabView = function() {
	GetElement(TabView).empty();
}

TabViewManager.IsTabViewVisible = function() {
    var count = GetElement(TabView).children().length;
    if(count > 0) {
        return true;
    }
    return false;
}

TabViewManager.UpdateTabView = function() {
    var tabManager = new TabManager();

    // Remove all dead tabs and add them to bookmark        
    tabManager.RemoveDeadTabs(function(deadTabs) {
        for(var i = 0; i < deadTabs.length; i++) {
            BookmarkManager.AddBookmark(deadTabs[i]);    
        }

        tabManager.GetAllSavedTabs(function(tabs) {
            var len = tabs.length;
            for(var i = 0; i < tabs.length && i < 5; i++) {
                ItemManager.CreateItemAndAddToLayout(tabs[i]);
                ItemManager.UpdateItemProgress(tabs[i], i);
            }
        });
    });
}