var tabManager = new TabManager();
tabManager.Init();

chrome.contextMenus.create({
    "title": "Save tab to Usage",
    "contexts": ["page", "selection", "image", "link"]});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    var tab = TabHelper.CreateTab(tab.url, tab.favIconUrl, tab.title, "");
    tabManager.SaveTab(tab);
});
