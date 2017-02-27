/**
 * Created by lelabo on 17/02/17.
 */

var Bookmark = function (obj) {
    obj = obj || null;
    if (obj) {
        this.id = obj.id;
        this.dateAdded = obj.dateAdded;
        this.parentId = obj.parentId;
        this.index = obj.index;
        this.title = obj.title;
    }
};

Bookmark.prototype = {
    id: null,
    dateAdded: null,
    parentId: null,
    index: null,
    title: null
};

