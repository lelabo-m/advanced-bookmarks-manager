/**
 * Created by lelabo on 27/02/17.
 */
var BookmarkQuery = function (obj) {
    obj = obj || null;
    if (obj) {
        this.parentId = obj.parentId;
        this.index = obj.index;
        this.title = obj.title;
        this.url = obj.url;
    }

    this.to_query = function () {
        var parameters = ["parentId", "index", "title", "url"];
        var query = {};
        for (var i = 0; i < parameters.length; i++) {
            var name = parameters[i];
            if (this[name] != null) {
                query[name] = this[name];
            }
        }
        return query;
    }
};

BookmarkQuery.prototype = {
    parentId: null,
    index: null,
    title: null,
    url: null
};

BookmarkQuery.fromParam = function (parentId, index, title, url) {
    var params = {parentId: parentId, index: index, title: title, url: url};
    return new BookmarkQuery(params);
};

BookmarkQuery.Directory = function (title, parentId) {
    var params = {parentId: parentId, index: null, title: title, url: null};
    return new BookmarkQuery(params);
};

