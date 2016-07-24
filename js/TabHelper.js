function TabHelper() {
};


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

TabHelper.CreateTab = function(url, icon = null, title = null, note = null) {
    noteColors = ['#FF8A80', '#80D8FF', '#FFFF8D', '#FFD180', '#CED7DB', '#A7FFEB', '#CCFF90'];
    var color = noteColors[getRandomInt(0, (noteColors.length - 1))];
    var curTime = (new Date).getTime();
    var tab = {
        "url"   : url,
        "icon"  : icon,
        "title" : title,
        "note"  : note,
        "color" : color,
        "time"  : curTime
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