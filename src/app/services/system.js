/**
 * Created by lelabo on 28/02/17.
 */
angular.module('advbookmarks-bg').service('SystemService', function(global, BookmarkQuery) {

    this.root_dir = null;

    this.init = function () {
        console.log("HELLO WORLD");
        var root_dir = BookmarkQuery.Directory(global.root_dir);
        console.log(root_dir);
        console.log(root_dir.to_array());
        // var root = BookmarkService.create(root_dir);
    };

});