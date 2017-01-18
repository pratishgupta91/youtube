function ViewManager() {
    var videoQueueManager;
}

ViewManager.prototype.init = function() {
    this.videoQueueManager = new VideoQueueManager();
};

ViewManager.prototype.createContainerScript = function() {
    var script = "<div class='q_container'>Hello</div>";
    return script;
};

ViewManager.prototype.createVideoBoxScript = function(video) {
    var script = "<div class='video-box'>";
    script += "<img class='video-box-img' src='"+ video.thumbnail +"'>";
    script += "<div class='video-box-title'><a href='" + video.url + "'>" + video.title + "</a></div>";
    script += "</div>";
    return script;
};

ViewManager.prototype.addVideoToQueue = function(video) {
    $(".q_container").append(this.createVideoBoxScript(video));
}

ViewManager.prototype.removeAllVideos = function() {
    $(".q_container").empty();
}