$(document).ready(function() {
    var tabManager = new TabManager();
    tabManager.GetAllSavedTabs(function(tabs) {
        var len = tabs.length;
        for(var i = 0; i < tabs.length && i < 5; i++) {
        	ItemManager.CreateItemAndAddToLayout(tabs[i]);
        	ItemManager.UpdateItemProgress(tabs[i], i);
        }
        DrawBarChart(tabs, GetElement(ChartItem));
        SliderManager.Activate();
    });
});