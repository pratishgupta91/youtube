
debugger;
document.body.style.background = 'yellow';
var viewManager = new ViewManager();
var script = viewManager.createContainerScript();
$("body").append(script);

var videosOnYouTubePage = document.getElementsByTagName('video');

// Youtube player is the first video tag on Youtube page
var videoPlayer = videosOnYouTubePage[0];
console.log(videoPlayer);

// videoPlayer.addEventListener('ended', function(e) {
//     chrome.runtime.sendMessage({operation: 'ended'});
// }, false);

chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    // Clear the view
    viewManager.removeAllVideos();

    // Get all the videos and add them to view
    var videos = message.videos;
	for(var i = 0; i < videos.length; i++) {
		viewManager.addVideoToQueue(videos[i]);
	}
});