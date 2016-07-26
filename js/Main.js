$(document).ready(function() {
    UserInfoManager.IsLandingPageVisited(function(isVisited) {
        // If landing page is visited, then don't show this to user
        if(isVisited) {
            ViewManager.HandleHelpView();
            if(!ViewManager.IsTabViewVisible()) {
                ViewManager.HideLandingView();
                ViewManager.ShowTabView();
            }
            else {
               ViewManager.UpdateTabView();
            }
        }

        // If landing page is not visited, don't show saved tabs.
        else {
            ViewManager.ShowLandingView();
            ViewManager.HideTabView();
            GetElement(GetStartedButton).click(function() {
                ViewManager.HandleHelpView();
                UserInfoManager.LandingPageVisited();
                ViewManager.HideLandingView();
                ViewManager.ShowTabView();
            });
        }
    })
});