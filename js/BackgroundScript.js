var tabManager = new TabManager();
tabManager.Init();


var clickHandler = function(e) {
    var url = e.pageUrl;
    chrome.tabs.query({active : true}, function(tabs) {
        for(var i = 0; i < tabs.length; i++)
        {
            if(tabs[i].url == url)
            {
                var tab = TabHelper.CreateTab(url, tabs[i].faviconUrl, tabs[i].title, "");
                tabManager.SaveTab(tab);
                
            }
        }
    });
};

chrome.contextMenus.create({
    "title": "Save tab to Usage",
    "contexts": ["page", "selection", "image", "link"],
    "onclick" : clickHandler
});

//window.open("../popup.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");