/**
 * Created by lelabo on 28/02/17.
 */
angular.module('advbookmarks-bg').service('BookmarkService', function($q, Bookmark) {

    function result_to_bookmarks(results) {
        var founds = [];
        for (var i = 0; i < results.length; i++) {
            founds.push(Bookmark.from_array(results[i]));
        }
        return founds
    }

    this.get_or_create = function (bookmark) {
        var defer = $q.defer();
        chrome.bookmarks.search(bookmark.to_query(), function (results) {
            if (!results.length) {
                chrome.bookmarks.create(bookmark.to_array(), function (results) {
                    defer.resolve(result_to_bookmarks(results));
                });
            }
            else {
                defer.resolve(result_to_bookmarks(results));
            }
        });
        return defer.promise;
    };

    this.get = function (bookmark) {
        var defer = $q.defer();
        chrome.bookmarks.search(bookmark.to_query(), function (results) {
            defer.resolve(result_to_bookmarks(results));
        });
        return defer.promise;
    };

});