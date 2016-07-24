var tabManager = new TabManager();
tabManager.Init();

chrome.contextMenus.create({
    "title": "Save tab to Usage",
    "contexts": ["page", "selection", "image", "link"]});

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({farewell: "goodbye"});
//   });

// function downloadImages(images) {
//     console.log('I received the following DOM content:\n' + images);
// }

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    // chrome.tabs.executeScript(tab.id, {file: "script.js"}, function() {
 //        if (chrome.runtime.lastError) {
 //            console.error(chrome.runtime.lastError.message);
 //        };
 //    });
    var tab = TabHelper.CreateTab(tab.url, tab.favIconUrl, tab.title, "");
    tabManager.SaveTab(tab, function(excessTabIndex, tab) {
        // If tabs are excess, notify user and move to bookmarks
        if(excessTabIndex != -1) {
            BookMarkManager.AddBookmark(tab);
            tabManager.RemoveTabAt(excessTabIndex);
        }
    });
});
