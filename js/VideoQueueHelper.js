
function VideoQueueHelper() {
	var q;
}

VideoQueueHelper.prototype.init = function() {
	this.q = new Array();
};

VideoQueueHelper.prototype.appendVideo = function(video) {
	this.q.push(video);
};

VideoQueueHelper.prototype.loopVideos = function(callback) {
	for(var i = 0; i < this.q.length; i++) {
		callback(this.q[i], i);
	}
}

VideoQueueHelper.prototype.loopVideosForTabId = function(tabId, callback) {
	this.loopVideos(function(video, index) {
		if(video.tabid == tabId) {
			callback(video, index);
		}
	});
}

VideoQueueHelper.prototype.getQueueSize = function(tabId) {
	var count = 0;
	this.loopVideosForTabId(tabId, function(video, index) {
		count++;
	});
	return count;
};

VideoQueueHelper.prototype.getVideosFromQueue = function(tabId) {
	var videos = new Array();
	this.loopVideosForTabId(tabId, function(video, index) {
		videos.push(video);
	});

	return videos;
};

VideoQueueHelper.prototype.getFrontVideo = function(tabId) {
	this.loopVideosForTabId(tabId, function(video, index) {
		return video;
	});

	return null;
};

VideoQueueHelper.prototype.removeFrontVideo = function(tabId) {
	var spliceIndex = -1;
	this.loopVideosForTabId(tabId, function(video, index) {
		if(spliceIndex == -1) {
			spliceIndex = index;
		}
	});

	q.splice(spliceIndex, 1);
};

