function ViewManager() {

}

ViewManager.ShowLandingView = function() {
    UserInfoManager.ShowLandingView();
}

ViewManager.HideLandingView = function() {
    UserInfoManager.HideLandingView();
}

ViewManager.UpdateTabView = function() {
    TabViewManager.UpdateTabView(function(tabCount) {
        if(tabCount == 0) {
            UserInfoManager.ShowDummyItem();
        }
        else {
            UserInfoManager.HideDummyItem();
        }
    });
}

ViewManager.ShowTabView = function() {
    TabViewManager.ShowTabView();
    ViewManager.UpdateTabView();
}

ViewManager.HideTabView = function() {
    TabViewManager.HideTabView();
}

ViewManager.IsTabViewVisible = function () {
    return TabViewManager.IsTabViewVisible();
}

ViewManager.HandleHelpView = function() {
    UserInfoManager.ShowHelpView();
}