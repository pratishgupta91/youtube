function BookMarkManager () {

};

BookMarkManager.CreateFolder = function(callback) {
     chrome.bookmarks.create({'title': BookmarkFolderName}, function(bookmark) {
        callback(bookmark);
     });
};

BookMarkManager.CreateBookmark = function(tab, bookmarkId) {
    chrome.bookmarks.create({
                    "parentId" : bookmarkId,
                    "title" : tab.title,
                    "url" : tab.url});
}

BookMarkManager.AddBookmark = function(tab) {
    ChromeHelper.RetrieveBookmarkFolderId(function(item) {
        if(item && item.BookmarkId) {
            BookMarkManager.CreateBookmark(tab, item.BookmarkId);
        }
        else {
            BookMarkManager.CreateFolder(function (bookmark) {
                ChromeHelper.StoreBookmarkFolderId(bookmark.id);
                BookMarkManager.CreateBookmark(tab, bookmark.id);
            });
        }
    })
};