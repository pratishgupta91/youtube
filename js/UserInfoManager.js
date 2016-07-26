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

UserInfoManager.GetHelpText = function(version) {
	
	var helpTexts = [
		{ 
			"title"   : "HOLA",
			"text"    : "TO SAVE A TAB, RIGHT CLICK ON THE TAB PAGE AND CLICK ON SAVE TAB. The saved tabs will be converted to bookmarks once the progress bar elapses.",
			"version" : "1"
		},

		{ 
			"title"   : "HOLA",
			"text"    : "The saved tabs will be converted to bookmarks once the progress bar elapses.",
			"version" : "2"
		}
	];

	for(var i = 0; i < helpTexts.length; i++) {
		if(helpTexts[i].version == version) {
			return helpTexts[i];
		}
	} 
}

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

UserInfoManager.GetHelpTextViewScript = function(title, helpText) {
	//HOLA !
	// TO SAVE A TAB, RIGHT CLICK ON THE TAB PAGE AND CLICK ON SAVE TAB.
	
	var script = "";
	// Help text
    script += "<div class='user-info'>"
    script += "<p>" + title + "</p>";
    script += "<p>" + helpText + "</p>"
    script += "<div class='got-it-band'><div class='got-it-btn'>GOT IT</div></div>"
    script += "</div>";
    return script;
}


UserInfoManager.ShowLandingView = function() {
	var landingViewScript = UserInfoManager.GetLandingViewScript();
	GetElement(LandingView).append(landingViewScript);
	SliderManager.Activate();
};

UserInfoManager.HideLandingView = function() {
	GetElement(LandingView).empty();
}

UserInfoManager.ShowHelpView = function() {
	var helpView = GetElement(HelpView);
	var helpText = UserInfoManager.GetHelpText(1);
	if(helpText) {
		var script = UserInfoManager.GetHelpTextViewScript(helpText.title, helpText.text.toUpperCase());
		helpView.append(script);
	}
}


UserInfoManager.HideHelpView = function() {
	GetElement(HelpView).empty();
}
