$(document).ready(function() {
    UserInfoManager.IsLandingPageVisited(function(isVisited) {
        // If landing page is visited, then don't show this to user
        if(isVisited) {
            if(!ViewManager.IsTabViewVisible) {
                ViewManager.HideLandingView();
                ViewManager.ShowTabView();
            }
            ViewManager.UpdateTabView();
        }

        // If landing page is not visited, don't show saved tabs.
        else {
            ViewManager.ShowLandingView();
            ViewManager.HideTabView();
            GetElement(GetStartedButton).click(function() {
                UserInfoManager.LandingPageVisited();
                ViewManager.HideLandingView();
                ViewManager.ShowTabView();
            });
        }
    })
});