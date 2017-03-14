/**
 * Created by lelabo on 28/02/17.
 */
angular.module('advbookmarks-bg').service('SystemService', function(global, BookmarkQuery, BookmarkService) {

    var self = this;
    this.root_dir = null;

    this.tree_initialization = function () {
        BookmarkService.create(BookmarkQuery.Directory(global.root_dir))
            .then(function (results) {
                self.root = results[0];
                var tmp = BookmarkQuery.Directory(global.read_later_dir, self.root.id);
                BookmarkService.create(tmp)
                    .then(function (results) {
                        self.read_later = results[0];
                    });
                BookmarkService.create(BookmarkQuery.Directory(global.interests_dir, self.root.id))
                    .then(function (results) {
                        self.interests = results[0];
                    });
            });
    };

    this.commands_initialization = function () {
        chrome.commands.onCommand.addListener(function(command) {
           if (command == "bookmarks-add") {
               // chrome.windows.create({'url': '/app/front/add_popup.html', 'type': 'panel'}, function(window) {
               // });
           }
        });
    };

    this.init = function () {
        this.tree_initialization();
        this.commands_initialization();
    };

});