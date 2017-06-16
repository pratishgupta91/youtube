//debugger;
document.body.style.background = 'yellow';
var viewManager = new ViewManager();
var script = viewManager.createContainerScript();
$("body").append(script);

//var videosOnYouTubePage = document.getElementsByTagName('video');

// Youtube player is the first video tag on Youtube page
//var videoPlayer = videosOnYouTubePage[0];
//console.log(videoPlayer);

// videoPlayer.addEventListener('ended', function(e) {
//     chrome.runtime.sendMessage({operation: 'ended'});
// }, false);

// document.addEventListener("")
// chrome.runtime.onMessage.addListener(function (message, sender, callback) {
//     // Clear the view
//     //viewManager.removeAllVideos();

//     // Get all the videos and add them to view
//  //    var videos = message.videos;
// 	// for(var i = 0; i < videos.length; i++) {
// 	// 	//viewManager.addVideoToQueue(videos[i]);
// 	// }
// });

window.addEventListener ("load", function(evt){
	if(document.readyState === "complete") {
		var videosOnYouTubePage = document.getElementsByTagName('video');
		console.log(videosOnYouTubePage);

		// Whenever a video in sending, send the event to background page
		// DO NOT PUT BREAKPOINT ON THIS CODE
		videosOnYouTubePage[0].addEventListener('ended', function(e) {
			// LOG video
		 	console.log(videosOnYouTubePage);
			chrome.runtime.sendMessage({operation: "ended"}, function(response) {});
		 }, false);
		
	   
	}
}, false);


