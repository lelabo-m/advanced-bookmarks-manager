/**
 * Created by lelabo on 28/02/17.
 */
angular.module('advbookmarks-bg',[]).service('BookmarkService', function(Bookmark) {

    this.create = function (bookmark) {
        this.exist(bookmark.to_query(), function (result) {
            if (!result.length) {
                chrome.bookmarks.create(bookmark.to_query(), function (result) {
                    var res = Bookmark.from_array(result);
                    Debug.inspect_object(res);
                    return res;
                });
            }
        });
        // console.log(res);
    };

    this.exist = function (query, callback) {
        chrome.bookmarks.search(query, callback)
    };

});