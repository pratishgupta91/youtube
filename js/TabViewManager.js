function TabViewManager () {

}

TabViewManager.GetTabViewScript = function() {
	
	// ToolBar
	var script = "<div class='toolbar'>";
	script += "<div class='show-chart'>";
    script += "<img src=../img/chart.png height='20px' width='20px'>";
    script += "</div></div>";

    script += "<div style='width:300px; height:0px;' class='hart-layout'>";
    script += "<canvas id='usage_chart' class='usage_chart' width='200' height='80' ></canvas>";
    script += "</div>";
                
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
    var count = GetElement(TabView).length;
    if(count > 0) {
        return true;
    }
    return false;
}

TabViewManager.UpdateTabView = function() {
    var tabManager = new TabManager();
    tabManager.GetAllSavedTabs(function(tabs) {
        var len = tabs.length;
        for(var i = 0; i < tabs.length && i < 5; i++) {
            ItemManager.CreateItemAndAddToLayout(tabs[i]);
            ItemManager.UpdateItemProgress(tabs[i], i);
        }
    });
}