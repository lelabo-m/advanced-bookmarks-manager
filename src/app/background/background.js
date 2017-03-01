// var global = new Object();
//
// function init_extension() {
//     var root_dir = BookmarkQuery.Directory(constant.root_dir);
//     var root = BookmarksManager.create(root_dir);
//     Debug.inspect_object(root)
// }
//
// init_extension();
//

var app = angular.module('advbookmarks-bg', []);

// app.constant("global", {
//         "root_dir": "adv-bookmarks-inbox",
//         "read_dir": "to_read",
//         "interest_dir": "interesting"
// });

app.run(function(SystemService) {
        console.log("RUN");
        // console.log(global.root_dir);
        SystemService.init();
});

