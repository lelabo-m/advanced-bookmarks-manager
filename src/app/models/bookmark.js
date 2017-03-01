/**
 * Created by lelabo on 17/02/17.
 */
angular.module('advbookmarks-bg').factory('Bookmark', function() {

    /**
     * Constructor, with class name
     * Public properties, assigned to the instance ('this')
     */
    function Bookmark(id, parentId, index, title, dateAdded) {
        this.id = id;
        this.parentId = parentId;
        this.index = index;
        this.title = title;
        this.dateAdded = dateAdded;
    }

    /**
     * Public method, assigned to prototype
     */

    /**
     * Private property
     */

    /**
     * Private function
     */

    /**
     * Static property
     * Using copy to prevent modifications to private property
     */

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Bookmark.from_array = function (arr) {
        return new Bookmark(arr.id, arr.parentId, arr.index, arr.title, arr.dateAdded);
    };

    /**
     * Return the constructor function
     */
    return Bookmark;
});

angular.module('advbookmarks-bg').factory('BookmarkQuery', function() {

    /**
     * Constructor, with class name
     * Public properties, assigned to the instance ('this')
     */
    function BookmarkQuery(parentId, index, title, url) {
        this.parentId = parentId;
        this.index = index;
        this.title = title;
        this.url = url;
    }

    /**
     * Public method, assigned to prototype
     */
    BookmarkQuery.prototype.to_array = function () {
        var parameters = ["parentId", "index", "title", "url"];
        var query = {};
        for (var i = 0; i < parameters.length; i++) {
            var name = parameters[i];
            if (this[name] != null) {
                query[name] = this[name];
            }
        }
        return query;
    };

    /**
     * Private property
     */

    /**
     * Private function
     */

    /**
     * Static property
     * Using copy to prevent modifications to private property
     */

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    BookmarkQuery.Directory = function (title, parentId) {
        if (parentId === undefined) {
            parentId = null;
        }
        return new BookmarkQuery(parentId, null, title, null);
    };

    /**
     * Return the constructor function
     */
    return BookmarkQuery;
});