/**
 * Created by lelabo on 18/02/17.
 */


function process_bookmark(bookmarks) {

    for (var i =0; i < bookmarks.length; i++) {
        var bookmark = bookmarks[i];
        if (bookmark.url) {
            console.log("bookmark: "+ bookmark.title + " ~  " + bookmark.url);
        }

        if (bookmark.children) {
            process_bookmark(bookmark.children);
        }
    }
}

chrome.browserAction.onClicked.addListener(function(tab) {
    var book = Bookmarks.fromParam(null, null, "TEST-extension", "chrome://extensions/");
    BookmarksManager.create(book, function(result) {
        Debug.inspect_object(result);
    });
    // console.log("listing bookmarks: " );
    // chrome.bookmarks.getTree( process_bookmark );
});