function HistoryManager() {
    var urlCounts = {};
};

HistoryManager.prototype.Initialize = function() {
    this.urlCounts = {};
};

HistoryManager.prototype.CreateDailyHistoryParam = function() {
    var param = {
        text: ''           // URL Match
    };

    return param;
};

HistoryManager.prototype.GetHistory = function(params, callback) {
    chrome.history.search(params, callback);
};

HistoryManager.prototype.UpdateURLCounts = function(url, count) {
    if (url in this.urlCounts) {
        this.urlCounts[url] += count;
    }
    else {
        this.urlCounts[url] = count;
    }
};

HistoryManager.prototype.GetUrlItems = function() {
    var sortable = [];
for (var vehicle in this.urlCounts)
      sortable.push([vehicle, this.urlCounts[vehicle]]);
sortable.sort(
    function(a, b) {
        return b[1] - a[1];
    }
);
    return sortable;
};



