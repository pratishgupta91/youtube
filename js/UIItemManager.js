function ItemManager() {
};


ItemManager.GetItem = function(parentElem, index) {
    return parentElem.eq(index);
};

ItemManager.GetItemWidth = function(index) {
    var elem = parentElem.eq(index);
    return elem.outerWidth();
};

ItemManager.GetItemHeight = function(index) {
    var elem = parentElem.eq(index);
    return elem.outerHeight();
};

ItemManager.GetItemCount = function() {
    var count = GetElement(ItemLayout).children().length;
    return count;
}

ItemManager.UpdateItemProgress = function(tab, index) {
    var listItemElemOverlay = GetElement(ItemOverlay).eq(index);
    var listItemElem = GetElement(Item).eq(index);
    var listItemWidth = listItemElem.outerWidth();
    var listItemHeight = 3;//listItemElem.outerHeight();

    var curTime = (new Date).getTime();
    tabCreatedTime = tab.time;
    var elapsedTime = curTime - tabCreatedTime;
    ratioElapsed = (elapsedTime) / (TabValidityTime);
    var progressWidth = listItemWidth * ratioElapsed;

    //listItemElemOverlay.css({'height': listItemHeight+"px" });
    listItemElemOverlay.css({'width': progressWidth+"px" });
}

ItemManager.CreateItemAndAddToLayout = function(tab) {
    // Script to generate item
    var script = "<li class='item-container'>";
    script += "<div class='item'>";
    script += "<div class='item-top-bar'>";
    script += "<div class='item-url ellipsis'>" + tab.url + "</div>";
    script += "<img class='item-logo' src='" + tab.icon + "'>";
    script += "</div>";
    script += "<div class='item-bottom-bar'>";
    script += "<div class='item-title'>" + tab.title + "</div></div></div>";
    script += "<div class='item-overlay'></div></li>";

    // Set custom dynamic CSS to the item added
    var layoutElem = GetElement(ItemLayout);
    layoutElem.append(script);
};