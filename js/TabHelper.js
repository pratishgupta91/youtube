function TabHelper() {
};


TabHelper.CreateTab = function(url, icon = null, title = null, note = null) {
    var tab = {
        "url"   : url,
        "icon"  : icon,
        "title" : title,
        "note"  : note 
    };

    return tab;
}

TabHelper.GetTabTitle = function(tab) {
	return tab["title"];
}

TabHelper.GetTabIcon = function(tab) {
	return tab["icon"];
}


TabHelper.GetTabUrl = function(tab) {
	return tab["url"];
}

TabHelper.GetTabNote = function(tab) {
	return tab["note"];
}