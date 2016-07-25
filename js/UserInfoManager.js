function UserInfoManager() {

};

UserInfoManager.IsLandingPageVisited = function(callback) {
	ChromeHelper.RetrieveLandingPageStatus(function(items) {
		if(items && items.LandingPageStatus) {
			callback(true);
		}
		else {
			callback(false);
		}
	});
};

UserInfoManager.LandingPageVisited = function() {
	ChromeHelper.StoreLandingPageStatus(true);
};

UserInfoManager.GetLandingViewScript = function() {
	
	// Slider script
	var script = "<div id='owl-demo' class='owl-carousel' style='width:300px;'>";
	script += "<div><img src='img/slider1.jpg'></div>";
	script += "<div><img src='img/slider2.jpg'></div>";
	script += "<div><img src='img/slider1.jpg'></div>";
	script += "<div><img src='img/slider2.jpg'></div>";
    script += "</div>";

    // Get started button
    script += "<div class='get-started-btn'>Get Started</div>";

    return script;
};

UserInfoManager.ShowLandingView = function() {
	var landingViewScript = UserInfoManager.GetLandingViewScript();
	GetElement(LandingView).append(landingViewScript);
	SliderManager.Activate();
};

UserInfoManager.HideLandingView = function() {
	GetElement(LandingView).empty();
}