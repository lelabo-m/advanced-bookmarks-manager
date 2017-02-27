/**
 * Created by lelabo on 18/02/17.
 */
var BookmarksManager = function () {
};

BookmarksManager.create = function (bookmark) {
    BookmarksManager.exist(bookmark.to_query(), function (result) {
        if (!result.length) {
            chrome.bookmarks.create(bookmark.to_query(), function (result) {
                var res = new Bookmark(result);
                Debug.inspect_object(res);
                return res;
            });
        }
    });
    console.log(res);
};

BookmarksManager.exist = function (query, callback) {
    chrome.bookmarks.search(query, callback)
};

// Callback receive
// dateAdded = 1487424506455
// id = 942
// index = 3
// parentId = 2
// title = TEST-extension
// url = chrome://extensions/
