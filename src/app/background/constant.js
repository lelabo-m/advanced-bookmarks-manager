/**
 * Created by lelabo on 27/02/17.
 */
'use strict';
angular.module('advbookmarks-bg', []).constant("global", {
    "root_dir": "adv-bookmarks-inbox",
    "read_dir": "to_read",
    "interest_dir": "interesting"
}).run(function(global) {
    console.log(global.root_dir);
});

// angular.module('advbookmarks-bg', []).run(function() {
//     console.log("HELLO WORLD!");
// });