function GetElement(name)
{
	return $(name);
}

var TabValidityTime = 1 * 60 * 60 * 1000;
var MaxTabCount = 3;
var BookmarkFolderName = "Usage";

// Storage keys
var BookmarkId = "BookmarkId";

// History
var HistoryCanvas = ".history_canvas";
var UsageChart    = ".usage_chart";
var ItemLayout = ".item-layout";
var ItemOverlay = ".item-overlay";
var Item = ".item";
var ChartItem = ".usage_chart"