var videoQueueHelper;
init();

function init() {
    videoQueueHelper = new VideoQueueHelper();
    videoQueueHelper.init();
    //var videos = videoQueueHelper.getVideosFromQueue();

    // chrome.tabs.query({
    //     "active": true,
    //     "currentWindow": true
    // }, function (tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, {"videos" : videos});
    // });
}

function httpGet(theUrl, callback)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", theUrl, true );
    xmlhttp.send();    
}

function genericOnClick(info, tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));

    var linkURL = info.linkUrl;
    var parts = linkURL.split('=');

    var URL = "https://www.googleapis.com/youtube/v3/videos?";
    URL += "id=" + parts[1];
    URL += "&key=AIzaSyACxBa1tJ3jVkRH_c_rHS_JAFLPEpIQebs";
    URL += "&part=snippet,contentDetails,statistics,status";
    console.log(URL);
    
    httpGet(URL, function(content) {
        //alert(content);
        var jsonVideo = JSON.parse(content);
        var videos = [];
        var video = {
            "url"        : linkURL, 
            "title"      : jsonVideo.items[0].snippet.title,
            "thumbnail"  : jsonVideo.items[0].snippet.thumbnails.default.url,
            "tabid"      : tab.id
        };
        videos.push(video);
        videoQueueHelper.appendVideo(video);
        chrome.tabs.sendMessage(tab.id, {"videos" : videos});
    });
}

chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
    var videos = videoQueueHelper.getVideosFromQueue(tabId);
    chrome.tabs.sendMessage(tab.id, {"videos" : videos});
});

// Listening to video end event
chrome.runtime.onMessage.addListener(function(request, sender) {
    if(request.operation == 'ended') {
        var url = sender.tab.url;
        var tabId = sender.tab.id;
        if(videoQueueHelper.getQueueSize(tabId) > 0) {
            // -> If the ended video has same URL has the one in the front of the queue
            // then remove it and play the next. If there is no next, then do nothing.
            // -> Else play the front video in Q.
            var videos = videoQueueHelper.getFrontVideo(tabId);
            if(videoQueueHelper.getFrontVideo(tabId).url == url) {
                videoQueueHelper.removeFrontVideo(tabId);
            }
            if(videoQueueHelper.getFrontVideo(tabId)) {
                chrome.tabs.update(tabId, {'url' : url});
            }
        }
    }
});

// Create one test item for each context type.
var contexts = ["link"];
for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "Test '" + context + "' menu item";
    var id = chrome.contextMenus.create({
        "title": title,
        "contexts": [context],
        "onclick": genericOnClick
    });
    console.log("'" + context + "' item:" + id);
}